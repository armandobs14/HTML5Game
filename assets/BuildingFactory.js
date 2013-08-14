/*Factory of builds*/
(function(window){
	function BuildingFactory (argument) {}
	BuildingFactory.prototype.createBuilding = function(buildingType, color) {
		if(buildingType == null){ 
			return new Building();
		}else{
			switch(buildingType){
				case "house":
					return new House(30,40,color);
					break;
				case "tallBuilding":
					return new TallBuilding(40,90,color);
					break;
			}
		}
	};

	window.BuildingFactory = BuildingFactory;
}(window));
