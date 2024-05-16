for (let index = 0; index <= 2; index++) {
    serial.writeNumber(3 - index)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(523, music.beat(BeatFraction.Whole))
basic.showString("go")
for (let index2 = 0; index2 <= 10000; index2++) {
    datalogger.mirrorToSerial(true)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
    datalogger.deleteLog(datalogger.DeleteType.Full)
    datalogger.log(datalogger.createCV("pack miss", 100))
    serial.writeLine("webise break message(if stop is mean break the webise)")
    serial.writeString("C:>breakingmicrobitwebise")
}
