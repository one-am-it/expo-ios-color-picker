//
//  ColorPickerView.swift
//  Expo iOS Color Picker
//
//  Created by Davide Volta on 06/09/24.
//

import SwiftUI

class ColorPickerViewModel : ObservableObject {
    @Published var label: String = "Color"
    @Published var color: Color? = nil
}

@available(iOS 14.0, *)
struct ColorPickerView: View {
    @StateObject var viewModel: ColorPickerViewModel
    
    var onColorPicked: ((String?) -> Void)?
    
    var body: some View {
        VStack {
            if let color = Binding<Color>($viewModel.color) {
                ColorPicker( $viewModel.label.wrappedValue, selection: color)
                    .labelsHidden()
                    .onChange(of: color.wrappedValue, perform: { color in
                        onColorPicked?(color.toHex())
                    })
            }
        }
    }
}

@available(iOS 14.0, *)
#Preview {
    ColorPickerView(viewModel: ColorPickerViewModel())
}
