import ExpoModulesCore
import SwiftUI
import UIKit

// UIView subclass that wraps the SwiftUI ColorPickerView
class ExpoIosColorPickerView: ExpoView {
    private let contentView: UIHostingController<ColorPickerView>
    
    public let viewModel: ColorPickerViewModel = ColorPickerViewModel()
    let onColorPicked: EventDispatcher
    
    required init(appContext: AppContext? = nil) {
        onColorPicked = EventDispatcher()
        
        var handleColorPicked: ((String?) -> Void)?
        
        contentView = UIHostingController(rootView: ColorPickerView(viewModel: self.viewModel, onColorPicked: { color in
            handleColorPicked?(color)
        }))

        
        super.init(appContext: appContext)
        
        handleColorPicked = { color in
            self.onColorPicked(["color": color])
        }
        
        clipsToBounds = true
        addSubview(contentView.view)
    }
    
    override func layoutSubviews() {
        contentView.view.frame = bounds
    }
}

