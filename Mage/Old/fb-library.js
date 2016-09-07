"use strict";

function Scene(){
	let maps;
	let screen;
}
function Sprite(){
	let spriteSheet;
	let spriteStart;
	let spriteShift;
	let spriteIndices;

	function changeXIndexBy(n){
		this.spriteIndices.x += n;
	}
	function changeYIndexBy(n){
		this.spriteIndices.y += n;
	}
}
function Vector(xComponent,yComponent){
	let x = xComponent;
	let y = yComponent;
	let mag;
	let angle; 

	function normalize(n){

	}
	function normalized(n){
		
	}
	function dot(vector2){
		
	}
	function cross(vector2){
		
	}
	function rotate(angle){
		
	}
	function orbit(vector2, angle){
		
	}
	function interpolateTo(vector2, n){
		
	}
	function moveTo(vector2, n){
		
	}
	function project(vector2){
		
	}
	function reflect(vector2){
		
	}
}
function Matrix(xxComponent,xyComponent,yxComponent,yyComponent){
	let xx = xxComponent;
	let xy = xyComponent;
	let yx = yxComponent;
	let yy = yyComponent;
}
function GameObject(name){
	let name = name;
	let sprite;
	let position;
	let direction;
	let components;
	let methods;
	let zIndex;
}
function Component(name){
	let name = name;
}
function Transform(name){
	let name = "Transform"
}
Transform.prototype = new Component("Transform");
function Method(name){
	let name = name;
}