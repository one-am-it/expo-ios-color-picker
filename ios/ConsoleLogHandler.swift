//
//  ConsoleLogHandler.swift
//  ExpoIosColorPicker
//
//  Created by Davide Volta on 09/09/24.
//
import ExpoModulesCore

public class ConsoleLogHandler: LogHandler {
    // Implement the required initializer
    public required init() {}

    // Implement the required log function
    public func log(type: LogType, _ message: String) {
        print("[\(type)] \(message)")
    }
}
