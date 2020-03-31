document.getElementById("make").onclick=function(){

	year=document.getElementById("year").value;
	month=document.getElementById("month").value;
	date=document.getElementById("day").value;

	let table=document.getElementById("calendar");

	//カレンダー初期化，最初の曜日だけ残す
	while(table.rows.length>1) table.deleteRow(-1);

	//document.table.reset();
	addCalendar(year, month,date,table);

}

function addCalendar(year, month, date,table) {
	//月は0~11．だから-1する必要がある
	let usrDate = new Date(year, month-1, date);
	let firstDate=new Date(year, month-1,1);
	let lastDate=new Date(year, month,0);

	let days=lastDate.getDate();
	let day_num = usrDate.getDay();
	let firstday_num = firstDate.getDay();

	let row=table.insertRow(-1);;
	let index=firstday_num;
	//最初の空欄
	for(let i=0;i<firstday_num;i++){
		let td=row.insertCell(-1);
		td.textContent=" ";
	}
	//日にち
	for(let i=1;i<=days;i++){
		if(index==7){
			row=table.insertRow(-1);
			index=0;
		}
		let td=row.insertCell(-1);
		//targetIDを付与する
		if(i==date){
			td.id="target";
		}
		td.textContent = i;
		index++;
	}

}



