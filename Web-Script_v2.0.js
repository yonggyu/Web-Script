var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
Bplayer=new android.media.MediaPlayer();

function newLevel()
{
clientMessage("§a제작자 : §6고수이발");
clientMessage("§b인터넷 버튼을 누르면 인터넷 실행 !");
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
btnWindow = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("인터넷");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl ('http://m.naver.com');
     
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      
 
}}));
layout.addView(button);

btnWindow.setContentView(layout);
btnWindow.setWidth(dip2px(ctx, 80));
btnWindow.setHeight(dip2px(ctx, 50));

btnWindow.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT |
android.view.Gravity.TOP, 10,60);
}catch(error){
print("진저 이하 오류");
}
} }));
}

function dip2px(ctx, dips)
{
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
