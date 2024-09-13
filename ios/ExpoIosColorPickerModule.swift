import ExpoModulesCore
import SwiftUI

public class ExpoIosColorPickerModule: Module {
    private var logger = Logger(logHandlers: [ConsoleLogHandler()])

    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoIosColorPicker')` in JavaScript.
        Name("ExpoIosColorPicker")

        // Enables the module to be used as a native view. Definition components that are accepted as part of the
        // view definition: Prop, Events.
        View(ExpoIosColorPickerView.self) {
            Events("onColorPicked")

            // Defines a setter for the `name` prop.
            Prop("defaultValue") { (view: ExpoIosColorPickerView, prop: String?) in
                guard let hexString = prop, let newColor = Color(hexString: hexString) else {
                    // Handle the case where the color prop is nil or invalid
                    return
                }

                if (view.viewModel.color == nil) {
                    view.viewModel.color = newColor
                }
            }
            Prop("label") { (view: ExpoIosColorPickerView, prop: String?) in
                view.viewModel.label = prop ?? "Color" // Provide a default label if none is set
            }
        }
    }
}
