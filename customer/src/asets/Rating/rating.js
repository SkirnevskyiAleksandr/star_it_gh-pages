import React from 'react';
import './rating.css';

function Rating() {
    return (
        <div className="rating-wrapper">
            <div className="output">Rating</div>

            <form className="rating">
                <input type="radio" id="star_5" name="star" value="5"/>
                <label for="star_5"></label>
                <input type="radio" id="star_4" name="star" value="4"/>
                <label for="star_4"></label>
                <input type="radio" id="star_3" name="star" value="3"/>
                <label for="star_3"></label>
                <input type="radio" id="star_2" name="star" value="2"/>
                <label for="star_2"></label>
                <input type="radio" id="star_1" name="star" value="1"/>
                <label for="star_1"></label>
            </form>


			{/* { function cb() {
				var val = document.querySelector('input[name="star"]:checked').value,
					output = document.querySelector(".output"),
					arr = ["hate it", "don't like it", "it's ok", "it's good", "it's great"],
					text;

				switch (val) {
					case "1":
						text = arr[0];
						break;
					case "2":
						text = arr[1];
						break;
					case "3":
						text = arr[2];
						break;
					case "4":
						text = arr[3];
						break;
					case "5":
						text = arr[4];
						break;
				}

				output.textContent = text;
},
document.forms[0].addEventListener("change", cb)};  */}

        </div>
    );
}


export default Rating;