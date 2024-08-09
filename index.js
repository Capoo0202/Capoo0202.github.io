

const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');

const price1 = document.getElementById('price1');
const roi1 = document.getElementById('roi1');
const unit1 = document.getElementById('unit1');
const sum1 = document.getElementById('sum1');

const price2 = document.getElementById('price2');
const roi2 = document.getElementById('roi2');
const unit2 = document.getElementById('unit2');
const sum2 = document.getElementById('sum2');

const price3 = document.getElementById('price3');
const roi3 = document.getElementById('roi3');
const unit3 = document.getElementById('unit3');
const sum3 = document.getElementById('sum3');

const price4 = document.getElementById('price4');
const roi4 = document.getElementById('roi4');
const unit4 = document.getElementById('unit4');
const sum4 = document.getElementById('sum4');

const price5 = document.getElementById('price5');
const roi5 = document.getElementById('roi5');
const unit5 = document.getElementById('unit5');
const sum5 = document.getElementById('sum5');

const price6 = document.getElementById('price6');
const roi6 = document.getElementById('roi6');
const unit6 = document.getElementById('unit6');
const sum6 = document.getElementById('sum6');

const price7 = document.getElementById('price7');
const roi7 = document.getElementById('roi7');
const unit7 = document.getElementById('unit7');
const sum7 = document.getElementById('sum7');

const price8 = document.getElementById('price8');
const roi8 = document.getElementById('roi8');
const unit8 = document.getElementById('unit8');
const sum8 = document.getElementById('sum8');

const price9 = document.getElementById('price9');
const roi9 = document.getElementById('roi9');
const unit9 = document.getElementById('unit9');
const sum9 = document.getElementById('sum9');

const price10 = document.getElementById('price10');
const roi10 = document.getElementById('roi10');
const unit10 = document.getElementById('unit10');
const sum10 = document.getElementById('sum10');

const price11 = document.getElementById('price11');
const roi11 = document.getElementById('roi11');
const unit11 = document.getElementById('unit11');
const sum11 = document.getElementById('sum11');

const price12 = document.getElementById('price12');
const roi12 = document.getElementById('roi12');
const unit12 = document.getElementById('unit12');
const sum12 = document.getElementById('sum12');

const price13 = document.getElementById('price13');
const roi13 = document.getElementById('roi13');
const unit13 = document.getElementById('unit13');
const sum13 = document.getElementById('sum13');

const price14 = document.getElementById('price14');
const roi14 = document.getElementById('roi14');
const unit14 = document.getElementById('unit14');
const sum14 = document.getElementById('sum14');

const total1 = document.getElementById('total1');
const total2 = document.getElementById('total2');

const last1 = document.getElementById('last1');
const last2 = document.getElementById('last2');

const reset = document.getElementById('reset');

unit1.disabled = true;
unit2.disabled = true;
unit3.disabled = true;
unit4.disabled = true;
unit5.disabled = true;
unit6.disabled = true;
unit7.disabled = true;
unit8.disabled = true;
unit9.disabled = true;
unit10.disabled = true;
unit11.disabled = true;
unit12.disabled = true;
unit13.disabled = true;
unit14.disabled = true;

sum1.disabled = true;
sum2.disabled = true;
sum3.disabled = true;
sum4.disabled = true;
sum5.disabled = true;
sum6.disabled = true;
sum7.disabled = true;
sum8.disabled = true;
sum9.disabled = true;
sum10.disabled = true;
sum11.disabled = true;
sum12.disabled = true;
sum13.disabled = true;
sum14.disabled = true;

var pricenow = [ 29.86, 10.52, 31.82, 9.95, 15.64, 14.92, 20.55, 17.32, 16.21, 16.01, 41.64, 38.49, 39.64, 34.1];

date1.addEventListener('input', function(e){
	var day = new Date(this.value).getUTCDay();
	var day2 = new Date(this.value);
	unit1.value = 0;
	sum1.value = 0;
	unit2.value = 0;
	sum2.value = 0;
	unit3.value = 0;
	sum3.value = 0;
	unit4.value = 0;
	sum4.value = 0;
	unit5.value = 0;
	sum5.value = 0;
	unit6.value = 0;
	sum6.value = 0;
	unit7.value = 0;
	sum7.value = 0;
	unit8.value = 0;
	sum8.value = 0;
	unit9.value = 0;
	sum9.value = 0;
	unit10.value = 0;
	sum10.value = 0;
	unit11.value = 0;
	sum11.value = 0;
	unit12.value = 0;
	sum12.value = 0;
	unit13.value = 0;
	sum13.value = 0;
	unit14.value = 0;
	sum14.value = 0;
	total1.value = 0;
	total2.value = 0;
	last1.value = 0;
	deletealloptions();
	if ( !date1.value ) {
		disable();
		date1.value = "2023-10-01";
		date2.value = "2024-09-31";
	}
	else {
		if([6,0].includes(day)){
			e.preventDefault();
			this.value = '';
			alert('非營業日');
			date1.value = "2023-10-01";
			date2.value = "2024-09-30";
			disable();
		}
		
		else {
			
			var day3 = addDays(day2, 365);
			date2.value=day3.getFullYear() + '-' + (day3.getMonth() + 1) + '-' + day3.getDate();
			unit1.disabled = false;
			unit2.disabled = false;
			unit3.disabled = false;
			unit4.disabled = false;
			unit5.disabled = false;
			unit6.disabled = false;
			unit7.disabled = false;
			unit8.disabled = false;
			unit9.disabled = false;
			unit10.disabled = false;
			unit11.disabled = false;
			unit12.disabled = false;
			unit13.disabled = false;
			unit14.disabled = false;
			
			sum1.disabled = false;
			sum2.disabled = false;
			sum3.disabled = false;
			sum4.disabled = false;
			sum5.disabled = false;
			sum6.disabled = false;
			sum7.disabled = false;
			sum8.disabled = false;
			sum9.disabled = false;
			sum10.disabled = false;
			sum11.disabled = false;
			sum12.disabled = false;
			sum13.disabled = false;
			sum14.disabled = false;
			
			var day4 = new Date(this.value).getDate();
			if ( day4 == 1 ) {
				price1.value = 1;
				roi1.value = "2%";
				price2.value = 17;
				roi2.value = "2%";
				price3.value = 17;
				roi3.value = "2%";
				price4.value = 17;
				roi4.value = "2%";
				price5.value = 17;
				roi5.value = "2%";
				price6.value = 17;
				roi6.value = "2%";
				price7.value = 17;
				roi7.value = "2%";
				price8.value = 17;
				roi8.value = "2%";
				price9.value = 17;
				roi9.value = "2%";
				price10.value = 17;
				roi10.value = "2%";
				price11.value = 17;
				roi11.value = "2%";
				price12.value = 17;
				roi12.value = "2%";
				price13.value = 17;
				roi13.value = "2%";
				price14.value = 17;
				roi14.value = "2%";
			}
			else if ( day4 == 2 ) {
				price1.value = 2;
				roi1.value = "3%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 3 ) {
				price1.value = 3;
				roi1.value = "4%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 4 ) {
				price1.value = 4;
				roi1.value = "5%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 5 ) {
				price1.value = 5;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 6 ) {
				price1.value = 6;
				roi1.value = "7%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 7 ) {
				price1.value = 7;
				roi1.value = "8%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 8 ) {
				price1.value = 8;
				roi1.value = "9%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 9 ) {
				price1.value = 9;
				roi1.value = "1%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 10 ) {
				price1.value = 10;
				roi1.value = "2%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 11 ) {
				price1.value = 11;
				roi1.value = "3%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 12 ) {
				price1.value = 12;
				roi1.value = "4%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 13 ) {
				price1.value = 18;
				roi1.value = "5%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 14 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 15 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 16 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 17 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 18 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 19 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 20 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 21 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 22 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 23 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 24 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 25 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 26 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 27 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 28 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 29 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 30 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			else if ( day4 == 31 ) {
				price1.value = 18;
				roi1.value = "6%";
				price2.value = 18;
				roi2.value = "2%";
				price3.value = 18;
				roi3.value = "2%";
				price4.value = 18;
				roi4.value = "2%";
				price5.value = 18;
				roi5.value = "2%";
				price6.value = 18;
				roi6.value = "2%";
				price7.value = 18;
				roi7.value = "2%";
				price8.value = 18;
				roi8.value = "2%";
				price9.value = 18;
				roi9.value = "2%";
				price10.value = 18;
				roi10.value = "2%";
				price11.value = 18;
				roi11.value = "2%";
				price12.value = 18;
				roi12.value = "2%";
				price13.value = 18;
				roi13.value = "2%";
				price14.value = 18;
				roi14.value = "2%";
			}
			
			option();
		}
	}
});

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function option() {
  var unit = document.querySelectorAll('select[name="unit"]');
  var price = document.querySelectorAll('input[name="price"]');
  for (var i = 0; i < price.length; i++) {
	  
	var maxunit = 1000 / Number(price[i].value);
	for ( var j = 1; j < parseInt(maxunit) + 1 ; j++ ) {
		var opt = document.createElement('option');
		opt.value = j;
		opt.innerHTML = j;
		unit[i].add(opt);
	}
  }  
}

function deletealloptions() {
	var unit = document.querySelectorAll('select[name="unit"]');
	for (var i = 0; i < unit.length; i++) {
		for (var j = unit[i].options.length - 1; j > 0 ; j-- ) {
			unit[i].remove(j);
		}
	}
}
function enable() {
	unit1.disabled = false;
	unit2.disabled = false;
	unit3.disabled = false;
	unit4.disabled = false;
	unit5.disabled = false;
	unit6.disabled = false;
	unit7.disabled = false;
	unit8.disabled = false;
	unit9.disabled = false;
	unit10.disabled = false;
	unit11.disabled = false;
	unit12.disabled = false;
	unit13.disabled = false;
	unit14.disabled = false;	
	
	sum1.disabled = false;
	sum2.disabled = false;
	sum3.disabled = false;
	sum4.disabled = false;
	sum5.disabled = false;
	sum6.disabled = false;
	sum7.disabled = false;
	sum8.disabled = false;
	sum9.disabled = false;
	sum10.disabled = false;
	sum11.disabled = false;
	sum12.disabled = false;
	sum13.disabled = false;
	sum14.disabled = false;
}

function disable() {
	unit1.disabled = true;
	unit2.disabled = true;
	unit3.disabled = true;
	unit4.disabled = true;
	unit5.disabled = true;
	unit6.disabled = true;
	unit7.disabled = true;
	unit8.disabled = true;
	unit9.disabled = true;
	unit10.disabled = true;
	unit11.disabled = true;
	unit12.disabled = true;
	unit13.disabled = true;
	unit14.disabled = true;	
	
	sum1.disabled = true;
	sum2.disabled = true;
	sum3.disabled = true;
	sum4.disabled = true;
	sum5.disabled = true;
	sum6.disabled = true;
	sum7.disabled = true;
	sum8.disabled = true;
	sum9.disabled = true;
	sum10.disabled = true;
	sum11.disabled = true;
	sum12.disabled = true;
	sum13.disabled = true;
	sum14.disabled = true;
	
	price1.value = "";
	roi1.value = "";
	price2.value = "";
	roi2.value = "";
	price3.value = "";
	roi3.value = "";
	price4.value = "";
	roi4.value = "";
	price5.value = "";
	roi5.value = "";
	price6.value = "";
	roi6.value = "";
	price7.value = "";
	roi7.value = "";
	price8.value = "";
	roi8.value = "";
	price9.value = "";
	roi9.value = "";
	price10.value = "";
	roi10.value = "";
	price11.value = "";
	roi11.value = "";
	price12.value = "";
	roi12.value = "";
	price13.value = "";
	roi13.value = "";
	price14.value = "";
	roi14.value = "";
	
	total1.value = "";
	total2.value = "";
	last1.value = "";
}
reset.addEventListener('click', function(b) {
	unit1.disabled = true;
	unit2.disabled = true;
	unit3.disabled = true;
	unit4.disabled = true;
	unit5.disabled = true;
	unit6.disabled = true;
	unit7.disabled = true;
	unit8.disabled = true;
	unit9.disabled = true;
	unit10.disabled = true;
	unit11.disabled = true;
	unit12.disabled = true;
	unit13.disabled = true;
	unit14.disabled = true;	
	
	sum1.disabled = true;
	sum2.disabled = true;
	sum3.disabled = true;
	sum4.disabled = true;
	sum5.disabled = true;
	sum6.disabled = true;
	sum7.disabled = true;
	sum8.disabled = true;
	sum9.disabled = true;
	sum10.disabled = true;
	sum11.disabled = true;
	sum12.disabled = true;
	sum13.disabled = true;
	sum14.disabled = true;
	
	numofbond = 0;
})

function sumofchooseselect(x) {
	var select1 = document.querySelectorAll('select[name="unit"]');
	var select2 = document.querySelectorAll('select[name="sum"]');
	var select3 = document.querySelectorAll('input[name="price"]');
	var select4 = document.querySelectorAll('input[name="roi"]');
	var numofbond = 0;
	select2[x].options.remove(20);
	for (var i = 0; i < select1[x].length; i++) {
		if ( parseInt(select1[x].options[select1[x].options.length - 1].value) !== parseFloat(select1[x].options[select1[x].options.length - 1].value) ) {
			select1[x].remove(select1[x].options.length - 1);
		}
	}
	for (var i = 0; i < select1.length; i++) {
	   if ( select1[i].value > 0 ) {
		   numofbond = numofbond + 1;
		   if ( numofbond >= 5 ) {
			   for (var j = 0; j < select1.length; j++) {
				   if ( select1[j].value <= 0 ) {
					   select1[j].disabled = true;
					   select2[j].disabled = true;
				   }
			   }
		   }
		   else {
			   for (var j = 0; j < select1.length; j++) {
				   select1[j].disabled = false;
				   select2[j].disabled = false;
			   }
		   }
	   } 
	}

	var sum = 1000 * Number(select1[x].value) * Number(select3[x].value);
	var opt = document.createElement('option');
	opt.value = sum;
	opt.text = sum.toLocaleString();
	select2[x].options.add(opt);
	select2[x].value = sum;
	var total = 0;
	var roi = 0;
	for (var i = 0; i < select2.length; i++) {
		if ( Number(select2[i].value) > 0 ) {
			total = Number(total) + Number(select2[i].value);
			roi = Number(roi) + ( Number(pricenow[i]) - Number(select3[i].value) ) * Number(select1[i].value);
		}
	}
	total1.value = total;
	last1.value = 1000000 - Number(total1.value);
	if ( total > 1000000 ) {
		alert("超出預算");
		total1.value = Number(total) - Number(select2[x].value);
		last1.value = 1000000 - Number(total1.value);
		select1[x].value = 0;
		select2[x].value = 0;
		select2[x].options.remove(20);
		for (var i = 0; i < select1[x].length; i++) {
			if ( parseInt(select1[x].options[select1[x].options.length - 1].value) !== parseFloat(select1[x].options[select1[x].options.length - 1].value) ) {
				select1[x].remove(select1[x].options.length - 1);
			}
		}
		enable();
	}
	else {
		total2.value = roi.toFixed(2);
	}
}
	
function unitofchooseselect(x) {
	var select1 = document.querySelectorAll('select[name="unit"]');
	var select2 = document.querySelectorAll('select[name="sum"]');
	var select3 = document.querySelectorAll('input[name="price"]');
	var select4 = document.querySelectorAll('input[name="roi"]');
	var numofbond = 0;
	select2[x].options.remove(20);
	for (var i = 0; i < select1[x].length; i++) {
		if ( parseInt(select1[x].options[select1[x].options.length - 1].value) !== parseFloat(select1[x].options[select1[x].options.length - 1].value) ) {
			select1[x].remove(select1[x].options.length - 1);
		}
	}
	for (var i = 0; i < select2.length; i++) {
	   if ( select2[i].value > 0 ) {
		   numofbond = numofbond + 1;
		   if ( numofbond >= 5 ) {
			   for (var j = 0; j < select2.length; j++) {
				   if ( select2[j].value <= 0 ) {
					   select1[j].disabled = true;
					   select2[j].disabled = true;
				   }
			   }
		   }
		   else {
			   for (var j = 0; j < select2.length; j++) {
				   select1[j].disabled = false;
				   select2[j].disabled = false;
			   }
		   }
	   } 
	}
		
	if ( select2[x].value == 0 ) select1[x].value = 0;
	else {
	    var unit = select2[x].value / select3[x].value / 1000; 
		var opt = document.createElement('option');
		opt.value = parseFloat(unit);
		opt.text = parseFloat(unit.toFixed(2));
		var fakebool = 0;
		for ( var i = 0 ; i < select1[x].options.length ; i++ ) {
			if ( select1[x].options[i].value == opt.value ) {
				select1[x].value = parseFloat(unit);
				fakebool = 1;
			}
		}
		if ( fakebool != 1 ) {
			select1[x].options.add(opt);
			select1[x].value = parseFloat(unit);	
		}
	}
	
	var total = 0;
	var roi = 0;
	for (var i = 0; i < select2.length; i++) {
		if ( select2[i].value > 0 ) {
			total = Number(total) + Number(select2[i].value);
			roi = Number(roi) + ( Number(pricenow[i]) - Number(select3[i].value) ) * Number(select1[i].value);//?
		}
	}
	total1.value = total;
	last1.value = 1000000 - Number(total1.value);
	if ( total > 1000000 ) {
		alert("超出預算");
		total1.value = Number(total) - Number(select2[x].value);
		last1.value = 1000000 - Number(total1.value);
		select1[x].value = 0;
		select2[x].value = 0;
		select2[x].options.remove(20);
		for (var i = 0; i < select1[x].length; i++) {
			if ( parseInt(select1[x].options[select1[x].options.length - 1].value) !== parseFloat(select1[x].options[select1[x].options.length - 1].value) ) {
				select1[x].remove(select1[x].options.length - 1);
			}
		}
		enable();
	}
	else {
		total2.value = roi.toFixed(2);
	}
}

unit1.addEventListener('change', function() {
	sumofchooseselect(0);
});
unit2.addEventListener('change', function() {
	sumofchooseselect(1);
});
unit3.addEventListener('change', function() {
	sumofchooseselect(2);
});
unit4.addEventListener('change', function() {
	sumofchooseselect(3);
});
unit5.addEventListener('change', function() {
	sumofchooseselect(4);
});
unit6.addEventListener('change', function() {
	sumofchooseselect(5);
});
unit7.addEventListener('change', function() {
	sumofchooseselect(6);
});
unit8.addEventListener('change', function() {
	sumofchooseselect(7);
});
unit9.addEventListener('change', function() {
	sumofchooseselect(8);
});
unit10.addEventListener('change', function() {
	sumofchooseselect(9);
});
unit11.addEventListener('change', function() {
	sumofchooseselect(10);
});
unit12.addEventListener('change', function() {
	sumofchooseselect(11);
});
unit13.addEventListener('change', function() {
	sumofchooseselect(12);
});
unit14.addEventListener('change', function() {
	sumofchooseselect(13);
});

sum1.addEventListener('change', function() {
	unitofchooseselect(0);
});
sum2.addEventListener('change', function() {
	unitofchooseselect(1);
});
sum3.addEventListener('change', function() {
	unitofchooseselect(2);
});
sum4.addEventListener('change', function() {
	unitofchooseselect(3);
});
sum5.addEventListener('change', function() {
	unitofchooseselect(4);
});
sum6.addEventListener('change', function() {
	unitofchooseselect(5);
});
sum7.addEventListener('change', function() {
	unitofchooseselect(6);
});
sum8.addEventListener('change', function() {
	unitofchooseselect(7);
});
sum9.addEventListener('change', function() {
	unitofchooseselect(8);
});
sum10.addEventListener('change', function() {
	unitofchooseselect(9);
});
sum11.addEventListener('change', function() {
	unitofchooseselect(10);
});
sum12.addEventListener('change', function() {
	unitofchooseselect(11);
});
sum13.addEventListener('change', function() {
	unitofchooseselect(12);
});
sum14.addEventListener('change', function() {
	unitofchooseselect(13);
});
