class mx.core.View extends mx.core.UIComponent
{
   var className = "View";
   var hasBeenLayedOut = false;
   var _loadExternalClass = "UIComponent";
   static var symbolName = "View";
   static var symbolOwner = mx.core.View;
   static var version = "2.0.2.127";
   static var childNameBase = "_child";
   function View()
   {
      super();
   }
   function init()
   {
      super.init();
      this.tabChildren = true;
      this.tabEnabled = false;
      this.boundingBox_mc._visible = false;
      this.boundingBox_mc._width = this.boundingBox_mc._height = 0;
   }
   function size()
   {
      this.border_mc.move(0,0);
      this.border_mc.setSize(this.__get__width(),this.__get__height());
      this.doLayout();
   }
   function draw()
   {
      this.size();
   }
   function __get__numChildren()
   {
      var _loc3_ = mx.core.View.childNameBase;
      var _loc2_ = 0;
      while(!false)
      {
         if(this[_loc3_ + _loc2_] == undefined)
         {
            return _loc2_;
         }
         _loc2_ = _loc2_ + 1;
      }
      return -1;
   }
   function __get__tabIndex()
   {
      return !this.tabEnabled?undefined:this.__tabIndex;
   }
   function __set__tabIndex(n)
   {
      this.__tabIndex = n;
      return this.__get__tabIndex();
   }
   function addLayoutObject(object)
   {
   }
   function createChild(className, instanceName, initProps)
   {
      if(this.depth == undefined)
      {
         this.depth = 1;
      }
      var _loc2_ = undefined;
      if(typeof className == "string")
      {
         this.depth = this.depth + 1;
         _loc2_ = this.createObject(className,instanceName,this.depth,initProps);
      }
      else
      {
         this.depth = this.depth + 1;
         _loc2_ = this.createClassObject(className,instanceName,this.depth,initProps);
      }
      if(_loc2_ == undefined)
      {
         this.depth = this.depth + 1;
         _loc2_ = this.loadExternal(className,this._loadExternalClass,instanceName,this.depth,initProps);
      }
      else
      {
         this[mx.core.View.childNameBase + this.__get__numChildren()] = _loc2_;
         _loc2_._complete = true;
         this.childLoaded(_loc2_);
      }
      this.addLayoutObject(_loc2_);
      return _loc2_;
   }
   function getChildAt(childIndex)
   {
      return this[mx.core.View.childNameBase + childIndex];
   }
   function destroyChildAt(childIndex)
   {
      if(!(!(childIndex < 0) && childIndex < this.__get__numChildren()))
      {
         return undefined;
      }
      var _loc4_ = mx.core.View.childNameBase + childIndex;
      var _loc6_ = this.__get__numChildren();
      var _loc3_ = undefined;
      while(true)
      {
         if((var _loc0_ = enumerate this) != null)
         {
            _loc3_ = _loc0_;
            if(_loc3_ == _loc4_)
            {
               _loc4_ = "";
               this.destroyObject(_loc3_);
               var _loc2_ = Number(childIndex);
               break;
            }
            continue;
         }
         _loc2_ = Number(childIndex);
         break;
      }
      while(_loc2_ < _loc6_ - 1)
      {
         this[mx.core.View.childNameBase + _loc2_] = this[mx.core.View.childNameBase + (_loc2_ + 1)];
         _loc2_ = _loc2_ + 1;
      }
      delete this.mx.core.View.childNameBase + (_loc6_ - 1);
      this.depth = this.depth - 1;
   }
   function initLayout()
   {
      if(!this.hasBeenLayedOut)
      {
         this.doLayout();
      }
   }
   function doLayout()
   {
      this.hasBeenLayedOut = true;
   }
   function createChildren()
   {
      if(this.border_mc == undefined)
      {
         this.border_mc = this.createClassChildAtDepth(_global.styles.rectBorderClass,mx.managers.DepthManager.kBottom,{styleName:this});
      }
      this.doLater(this,"initLayout");
   }
   function convertToUIObject(obj)
   {
   }
   function childLoaded(obj)
   {
      this.convertToUIObject(obj);
   }
   static function extension()
   {
      mx.core.ExternalContent.enableExternalContent();
   }
}
