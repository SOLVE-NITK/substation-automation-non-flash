_global.mx.skins.TitleBackground = function()
{
   this.constructObject();
};
_global.mx.skins.TitleBackground.prototype = new mx.skins.CustomBorder();
_global.mx.skins.TitleBackground.prototype.className = "TitleBackground";
_global.mx.skins.TitleBackground.symbolName = "TitleBackground";
_global.mx.skins.TitleBackground.symbolOwner = _global.mx.skins.TitleBackground;
_global.mx.skins.TitleBackground.prototype.leftSkin = "TitleLeft";
_global.mx.skins.TitleBackground.prototype.middleSkin = "TitleMiddle";
_global.mx.skins.TitleBackground.prototype.rightSkin = "TitleRight";
_global.mx.skins.SkinElement.registerElement("TitleBackground",_global.mx.skins.TitleBackground);
_global.mx.skins.SkinElement.registerElement("TitleLeft");
_global.mx.skins.SkinElement.registerElement("TitleMiddle");
_global.mx.skins.SkinElement.registerElement("TitleRight");
_global.mx.skins.TitleBackground.prototype.init = function()
{
   super.init();
};
