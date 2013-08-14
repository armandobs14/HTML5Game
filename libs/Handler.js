(function(window) {
	function Handler(){}
	Handler.click = function(event) {
		var target = event.target;

		if(target instanceof Coin){
			target.removeAllChildren();
			score++;
			net.send("score",{name: userName, score: score});
		}else if(target instanceof Icon){
			var iconName = target.text.text;
			switch(iconName){
				case "loja":
					game.showShop();
					break;
				case "chat":
					game.showChat();
					break;

			}
		}
	};
	window.Handler = Handler;
}(window));