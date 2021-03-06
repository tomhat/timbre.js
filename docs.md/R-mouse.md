T("mouse")
==========
{kr} Tracking Mouse Event

_* Browser Only_

## Description ##
マウスイベントを追跡して出力します

```timbre
var mouse = T("mouse");

T("saw", {freq:880}, mouse.X).play();
T("saw", {freq:660}, mouse.Y).play();

mouse.start();
```

## Properties ##
- `X`
  - X 座標を出力します
- `Y`
  - Y 座標を出力します
  
## Methods ##
- `start()`
  - トラッキングを開始する
- `stop()`
  - トラッキングを終了する

## Events ##
- `click`
- `mousedown`
- `mouseup`

- - -

# T("mouse.x") / T("mouse.y")
Tracking Mouse Position

## Description ##
マウスカーソルの座標を変換して出力します。

```timbre
var freq = T("mouse.y", {min:220, max:1760});

T("saw", {freq:freq, mul:0.5}).play();

T("mouse").start();
```

## Properties ##
- `min`  
  - マウス最小値のときの値 _(0)_
- `max`  
  - マウス最大値のときの値 _(1)_
- `curve` _("lin")_
  - 出力カーブの種類 (`"lin"`, `"exp"`, `"sqr"` or `"cub"`)

## Source ##
https://github.com/mohayonao/timbre.js/blob/master/src/objects/mouse.js
