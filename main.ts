input.onButtonPressed(Button.A, function () {
    CompassDirection = input.compassHeading()
    DirectionSwitch = input.compassHeading()
    RobotGo = true
    if (CompassDirection <= 180) {
        DirectionSwitch += 180
        StartLeft = true
    } else if (CompassDirection > 180) {
        DirectionSwitch += -180
        StartLeft = false
    }
    while (RobotGo == true) {
        if (StartLeft == true) {
            if (input.compassHeading() < CompassDirection || input.compassHeading() > DirectionSwitch) {
                pins.servoWritePin(AnalogPin.P1, RightSlow)
                pins.servoWritePin(AnalogPin.P2, LeftForward)
            } else {
                pins.servoWritePin(AnalogPin.P1, RightForward)
                pins.servoWritePin(AnalogPin.P2, LeftSlow)
            }
        } else {
            if (input.compassHeading() > CompassDirection || input.compassHeading() < DirectionSwitch) {
                pins.servoWritePin(AnalogPin.P1, RightForward)
                pins.servoWritePin(AnalogPin.P2, LeftSlow)
            } else {
                pins.servoWritePin(AnalogPin.P1, RightSlow)
                pins.servoWritePin(AnalogPin.P2, LeftForward)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            RobotGo = false
        }
    }
    pins.servoWritePin(AnalogPin.P1, RightStop)
    pins.servoWritePin(AnalogPin.P2, LeftStop)
})
let StartLeft = false
let DirectionSwitch = 0
let CompassDirection = 0
let RobotGo = false
let RightSlow = 0
let LeftSlow = 0
let LeftStop = 0
let RightStop = 0
let RightForward = 0
let LeftForward = 0
LeftForward = 180
RightForward = 0
RightStop = 90
LeftStop = 90
LeftSlow = 100
RightSlow = 80
RobotGo = false
CompassDirection = input.compassHeading()
