for index in range(3):
    serial.write_number(3 - index)
    music.play_tone(262, music.beat(BeatFraction.QUARTER))
    basic.show_number(3 - index)
music.play_tone(523, music.beat(BeatFraction.WHOLE))
basic.show_string("go")
for index2 in range(10001):
    datalogger.mirror_to_serial(True)
    datalogger.include_timestamp(FlashLogTimeStampFormat.NONE)
    datalogger.delete_log(datalogger.DeleteType.FULL)
    datalogger.log(datalogger.create_cv("pack miss", 100))
    serial.write_line("webise break message(if stop is mean break the webise)")
    serial.write_string("C:>breakingmicrobitwebise")