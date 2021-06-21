function all()
{
   if(f5_mc._visible == true && f6_mc._visible == true && f7_mc._visible == true && f8_mc._visible == true && f1_mc._visible == true && f2_mc._visible == true && f4_mc._visible == true && f3_mc._visible == true)
   {
      q = mx.controls.Alert.show("CB6 AND CB7 is tripped","Trip",mx.controls.Alert.OK,null,myClickHandler,"testIcon",mx.controls.Alert.OK);
      q.setStyle("fontSize","15");
      q.setStyle("borderColor","0x000000");
      q.setStyle("backgroundColor","0xCCCCCC");
      q.setStyle("fontColor","0x002525");
      q.setStyle("fontFamily","Arial");
      q.setStyle("borderStyle","solid");
      q.setStyle("fontWeight","bold");
      q.setSize(250,120);
   }
}
function f6()
{
   if(f1_mc._visible == true && f2_mc._visible == true && f4_mc._visible == true && f3_mc._visible == true)
   {
      q = mx.controls.Alert.show("CB6 is tripped","Trip",mx.controls.Alert.OK,null,myClickHandler,"testIcon",mx.controls.Alert.OK);
      q.setStyle("fontSize","17");
      q.setStyle("borderColor","0xFFFFFF");
      q.setStyle("backgroundColor","0xD8CB98");
      q.setStyle("fontColor","0x002525");
      q.setStyle("fontFamily","Arial");
      q.setStyle("borderStyle","solid");
      q.setStyle("fontWeight","bold");
      q.setSize(250,120);
   }
}
function f7()
{
   function cl()
   {
      m2load_txt.text = "";
      m1load_txt.text = "";
      m3load_txt.text = "";
      m1i_txt.text = "";
      m1v_txt.text = "";
      m1p_txt.text = "";
      m2i_txt.text = "";
      m2v_txt.text = "";
      m2p_txt.text = "";
      m3i_txt.text = "";
      m3v_txt.text = "";
      m3p_txt.text = "";
      CB6trip_mc._visible = false;
      CB7trip_mc._visible = false;
      m2load_txt._visible = false;
      m1load_txt._visible = false;
   }
   if(f5_mc._visible == true && f6_mc._visible == true && f7_mc._visible == true && f8_mc._visible == true)
   {
      q = mx.controls.Alert.show("CB7 is tripped","Trip",mx.controls.Alert.OK,null,myClickHandler,"testIcon",mx.controls.Alert.OK);
      q.setStyle("fontSize","17");
      q.setStyle("borderColor","0xFFFFFF");
      q.setStyle("backgroundColor","0x999966");
      q.setStyle("fontColor","0x002525");
      q.setStyle("fontFamily","Arial");
      q.setStyle("borderStyle","solid");
      q.setStyle("fontWeight","bold");
      q.setSize(250,120);
   }
}
m2i_txt.text = "0";
m2v_txt.text = "11";
m2p_txt.text = "0";
m1i_txt.text = "0";
m1v_txt.text = "11";
m1p_txt.text = "0";
m3i_txt.text = "0";
m3v_txt.text = "33";
m3p_txt.text = "0";
f1_mc._visible = false;
f2_mc._visible = false;
f3_mc._visible = false;
f4_mc._visible = false;
f5_mc._visible = false;
f6_mc._visible = false;
f7_mc._visible = false;
f8_mc._visible = false;
CB6trip_mc._visible = false;
CB7trip_mc._visible = false;
m3load_txt._visible = false;
m3load_txt.text = "Full Load";
