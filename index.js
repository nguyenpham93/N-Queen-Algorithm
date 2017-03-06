// Maked by Nguyen Pham
/**
* @param arrChess : chứa những quân hậu đạt điều kiện
* @param arrCross : chứa giá trị đưòng chéo chính của các quân hậu
* @param arrCross1 : chứa giá trị đưòng chéo phụ của các quân hậu
* @param total_solutions : chứa tối đa tất cả các solutions có thể tìm đuợc  
*/

let arrChess = [],
    arrCross = [], // i + j
    arrCross1 = [], // j - i + end
    total_solutions = [],
    n = 8,
    end = n - 1,
    i = 0;

function solve_n_queens(){
    for(let j = 0 ; j < n ; j++){
        let flag = true;
        let cross = i + j;
        let cross1 = j - i + end;
        // Kiểm tra xem quân hậu hiện tại có bị khống chế không, nếu có thì flag = false
        for(let k = 0; k < arrChess.length ; k++){
            // Kiểm tra hàng dọc
            if(k == arrChess[k][0] && j == arrChess[k][1]){
                flag = false;
                // Kiểm tra 2 hàng chéo
            }else if (cross == arrCross[k] || cross1 == arrCross1[k]){
                flag = false;
            }
        }
        if(flag){
            arrChess.push([i,j]);
            arrCross.push(cross);
            arrCross1.push(cross1);
            // Kiểm tra xem đã đủ n quân hậu chưa, nếu đủ thì lưu solution đó lại
            if(arrChess.length == n){
                let solution = arrChess.slice(0);
                total_solutions.push(solution);
            }else{
                i++;
                solve_n_queens();
                i--;
            }
            arrChess.pop();
            arrCross.pop();
            arrCross1.pop();
        }
    }
}

solve_n_queens();

console.log(total_solutions);
console.log("Total Solutions : " + total_solutions.length);

