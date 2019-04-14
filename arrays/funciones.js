var alumls=[];c
var shop=[];
function addAlu(list,nom,edad,nt1,nt2,nt3){
	var alu=[nom,edad,nt1,nt2,nt3];
	list.push(alu);
}
function addvend(list,nom){
	var shp=[nom,0,0];
	list.push(shp);
}
function searchNote(list,nom,tris){
	var y=tris+1;
	for (x=0;x<list.length;x++){
		if(list[x][0]==nom){
			return list[x][y];
		}
	}
}
function searchNote(list,nom){
	var total=0;
	var cont=0;
	var media=0;
	for (x=0;x<list.length;x++){
		if(list[x][0]==nom){
			if(y=2;y<list.length;x++){
				total=total+list[x][y];
				cont++;
			}
		}
	}
	media=total/cont;
	return media;
}
function medYear(list){
	var total;
	var lg=list.length;
	for (x=0;x<lg;x++){
		total=total+list[x][1];
	}
	return total/lg;
}
function callAlu(list){
	var lg=list.length;
	var x=Math.floor(Math.random()*lg);
	return list[x][0];
}
function parImpar(){
	var arr=[];
	var par=[];
	var impar=[];
	var arr2=[];
	var x=0;
	var y=0;
	var rnd;
	do{
		rnd=Math.floor(Math.random()*1000)+1;
		arr.push(rnd);
		x++;
	}while(x<100);
	do{
		if(arr[y]%2==0){
			par.push(arr[y]);
		}else{
			impar.push(arr[y]);
		}
		y++;
	}while(y<100);
	 for(x=0;x<par.length;x++){
		 arr2.push(par[x]);
	 }
	 for(x=0;x<impar.length;x++){
		 arr2.push(impar[x]);
	 }
	document.getElementById("ini")innerHTML=arr;
	document.getElementById("ord")innerHTML=arr2;
}
function calcPay(shp,nm){
	var lg=shp.length;
	var cont;
	var x;
	do{
		if(shp[x][0]==nm){
			shp[x][2]=200+(shp[x][0]/100*9);
		}
		cont++;
	}while(x<lg);
}
function reset0(arr){
	for(x=0;x<arr.length;x++){
		arr[x]=0;
	}
}
function reset1(arr){
	for(x=0;x<arr.length;x++){
		arr[x]=arr[x]+1;
	}
}
function reset3(arr){
	var ch="";
	for(x=0;x<arr.length;x++){
		ch.concat(arr[x]+" ");
	}
}
function dice1(num){
	var lstrcont=[0,0,0,0,0,0,0,0,0,0,0];
	var dc1;
	var dc2;
	var rs;
	var x=0;
	do{
		dc1=Math.floor(Math.rnd()*6+1);
		dc2=Math.floor(Math.rnd()*6+1);
		rs=dc1+dc2;
		lstrcont[rs-2]=lstrcont[rs-2]+1;
		x++;
	}while(x<num);
}
function dice2(num){
	var lstrcont=[0,0,0,0,0,0,0,0,0,0,0];
	var comb=[0,0,0,0,0,0];
	var mscomb=[comb,comb,comb,comb,comb,comb];
	var dc1;
	var dc2;
	var rs;
	var x=0;
	do{
		dc1=Math.floor(Math.rnd()*6+1);
		dc2=Math.floor(Math.rnd()*6+1);
		rs=dc1+dc2;
		lstrcont[rs-2]=lstrcont[rs-2]+1;
		mscomb[dc1][dc2]=mscomb[dc1][dc2]+1;
		x++;
	}while(x<num);	
}
function reserva(nm,tpst){
	var y;
	var seat=[0,0,0,0,0,0,0,0,0,0];
	if(tpst=="pri"){
		do{
			if(seat[x]==0){
				seat[x]=1;
				y=prompt(nm+"/ asiento "+(x+1)+" /clase:"+tpst);
			}
			x++;
		}while(ch<0 && x<5); 
		
	}
}
//ejercicio 1
addAlu(alumls,"manolo",20,6,7,9);
addAlu(alumls,"luis",21,6,7,9);
addAlu(alumls,"laura",19,6,7,9);
//ejercicio 2
searchNote(alumls,"manolo",1);
//ejercicio 3
medYear(alumls);
//ejercicio 4
callAlu(alumls);
//ejercicio 5
parImpar();
//ejercicio 6
addvend(shop,"manolo");
addVend(shop,"luis");
calcPay(shop,"luis");
//ejercicio 7
reset0(arr);
reset1(arr);
reset2(arr);
//ejercicio 8
dice1(36000);
//ejercicio 9
dice2(36000);
// ejercicio 10
reserva("toro","pri");