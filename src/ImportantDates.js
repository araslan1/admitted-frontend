import { useState } from 'react';
import './ImportantDates.css';

const ImportantDates = () => {
    //array that contains each colleges application deadline for EA & RD and assigns a unique id
    const [calInfo, setCalInfo] = useState([
        {blurb: 'Brown ED Due', month: 11, day: 1, id: 20},
        {blurb: 'Columbia RD Due', month: 11, day: 1, id: 22},
        {blurb: 'Cornell ED Due', month: 11, day: 1, id: 16},
        {blurb: 'Dartmouth ED Due', month: 11, day: 1, id: 18},
        {blurb: 'Harvard REA Due', month: 11, day: 1, id: 8},
        {blurb: 'Princeton REA Due', month: 11, day: 1, id: 14},
        {blurb: 'Stanford REA Due', month: 11, day: 1, id: 1},
        {blurb: 'Tulane ED Due', month: 11, day: 1, id: 5},
        {blurb: 'UPenn ED Due', month: 11, day: 1, id: 12},
        {blurb: 'USC EA Due', month: 11, day: 1, id: 3},
        {blurb: 'Yale REA Due', month: 11, day: 1, id: 10},
        {blurb: 'Tulane EA Due', month: 11, day: 15, id: 6},
        {blurb: 'Columbia RD Due', month: 1, day: 1, id: 23},
        {blurb: 'Harvard RD Due', month: 1, day: 1, id: 9},
        {blurb: 'Princeton RD Due', month: 1, day: 1, id: 15},
        {blurb: 'Cornell RD Due', month: 1, day: 2, id: 17},
        {blurb: 'Yale RD Due', month: 1, day: 5, id: 11},
        {blurb: 'Brown RD Due', month: 1, day: 5, id: 21},
        {blurb: 'Stanford RD Due', month: 1, day: 5, id: 2},
        {blurb: 'UPenn RD Due', month: 1, day: 5, id: 13},
        {blurb: 'Tulane RD Due', month: 1, day: 15, id: 7},
        {blurb: 'USC RD Due', month: 1, day: 15, id: 4}
    ])

    //placeholder that represents all the applications a student is using our service for
    const collegeArr = [10, 3, 23, 9, 15, 17, 21, 2, 13, 7, 4];

    //array to convert month int to string
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //value to update div id
    let num = 3;

    //function to update div id
    const colorChanger = () => {
        if (num != 3) {
            num++;
        }
        else {
            num = 1;
        }
        return 'icon-' + num;
    }

    let count = 0;
    const countCheck = () => {
        count++;
        return count <= 7;
    }

    return (
        <div className="important-dates">
            <p id='imp-dates'>Important Dates</p>
            <p>Get your essays reviewed before you submit!</p>
                <div className="imp-dates-icons-wrapper">
                <div className="imp-dates-icons">
                    {calInfo.filter(college => collegeArr.includes(college.id) && countCheck()).map((calendarIcon) => (
                        <div className="imp-date-ind-icon" id={colorChanger()} key={calendarIcon.id}>
                            <p className='imp-date-ind-icon-month'>{monthArr[calendarIcon.month - 1]}</p>
                            <p className='imp-date-ind-icon-date'>{calendarIcon.day}</p>
                            <p className='imp-date-ind-icon-info'>{calendarIcon.blurb}</p>
                        </div>
                    ))}
                </div>
                </div>
        </div>
    );
}
 
export default ImportantDates;