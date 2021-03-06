timevalue
=========
Time Value Syntax

###### en ######

`timbre.timevalue()` converts a string to milliseconds.

## Time Values ##
- **440Hz**
- **1.5sec**
- **1.5min**
- **1:05:30.100**
- **BPM120 L4**
- **BPM120 1:2.240**
- **BPM120 480ticks**
- **4000samples/8000Hz**

###### ja ######

timbre.js での時間表現は基本的にミリ秒を示す数値を使用しています。`timbre.timevalue()`関数は直感的な文字列からミリ秒に変換する機能を提供します。

## Time Values ##
- **440Hz** は周波数を換算します。
- **1.5sec** は 1.5秒を換算します。
- **1.5min** は 1分30秒を換算します。
- **1:05:30.100** は 1時間 5分 30.1秒 を換算します。
- **BPM120 L4** は BPM120 のときの 4分音符を換算します。
  - BPMを省略した場合は、 `timbre.bpm` の値で換算します。
  - *L4.* とした場合は付点4分音符とて換算します。
- **BPM120 1:2.240** は BPM120 のときの 1小節(4/4) 2拍 240ticks を換算します。
- **BPM120 480ticks** は BPM120 のときの 480ticks(1拍) を換算します。
- **4000samples/8000Hz** は 8000Hzでのサンプルレートでのサンプル数を換算をします。
  - サンプルレートを省略した場合は、 `timbre.samplerate` の値で換算します。
  
## Tips ##
`T("interval")` などの一部のオブジェクトは **timevalue形式** の文字列でも時間指定が可能です。

###### -- ######

```timbre
var synth = T("OscGen", {wave:"tri", mul:0.2}).play();

T("interval", {interval:"BPM120 L4", timeout:"5sec"}, function() {
    synth.noteOn(69, 80);
}).on("ended", function() {
    synth.pause();
    this.stop();
}).start();
```
