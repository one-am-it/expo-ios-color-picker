import SwiftUI

extension Color {
    init?(hexString: String) {
        // Trim any non-alphanumeric characters from the string
        var hex = hexString.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        
        // Ensure the hex code is either 6 or 8 characters (RGB or RGBA)
        if hex.count == 6 {
            hex = hex + "FF" // Add alpha value if missing (default to fully opaque)
        }
        
        guard hex.count == 8, let int = UInt64(hex, radix: 16) else {
            return nil
        }
        
        let a, r, g, b: Double
        r = Double((int >> 24) & 0xff) / 255.0
        g = Double((int >> 16) & 0xff) / 255.0
        b = Double((int >> 8) & 0xff) / 255.0
        a = Double(int & 0xff) / 255.0
        
        print("Values")
        print(a, r, g, b)
        
        // Initialize the Color with the extracted RGBA values
        self.init(.sRGB, red: r, green: g, blue: b, opacity: a)
    }
    
    func toHex() -> String? {
        let uic = UIColor(self)
        guard let components = uic.cgColor.components, components.count >= 3 else {
            return nil
        }
        let r = Float(components[0])
        let g = Float(components[1])
        let b = Float(components[2])
        var a = Float(1.0)
        
        if components.count >= 4 {
            a = Float(components[3])
        }
        
        if a != Float(1.0) {
            return String(format: "#%02lX%02lX%02lX%02lX", lroundf(r * 255), lroundf(g * 255), lroundf(b * 255), lroundf(a * 255))
        } else {
            return String(format: "#%02lX%02lX%02lX", lroundf(r * 255), lroundf(g * 255), lroundf(b * 255))
        }
    }
}
