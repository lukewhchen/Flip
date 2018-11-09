$(() => {
	let arr = [ [false, false], [false, false] ];
	let length = arr.length;
	let audio = $("#mysoundclip")[0];
	let audio1 = $("#mysoundclip1")[0];
	if ($(window).width() < 750) {
		$(".container").css("max-width", "100%");
	}
	let dWidth = $(".container").width();

	function setBoard() {
    let board = $(".board");
		board.empty();

		for (let i = 0; i < length; i++) {
			let row = (`<div class="row" idx=${i} ></div>`);
			board.append(row);

			for (let j = 0; j < length; j++) {
				let width = (dWidth - 30 - (length * 2)) / length;
				let square = ('<div class="square" ></div>');
				board.children(".row").eq(i).append(square)
					.find(".square").eq(j).attr("pos", i + "," + j).css({"width": width, "height": width})
					.addClass(() => {
						if (!arr[i][j]) {
							return "unselected";}
					});
			}
		}

		$(".square").click(function() {
			audio.play();
			let position = $(this).attr("pos").split(",");
			let x = Number(position[0]);
			let y = Number(position[1]);

			arr[x][y] = !arr[x][y];
  			if ((x - 1) >= 0) {
  					arr[x - 1][y] = !arr[x - 1][y];
  			}
  			if ((x + 1) < length) {
  					arr[x + 1][y] = !arr[x + 1][y];
  			}
  			if ((y - 1) >= 0) {
  					arr[x][y - 1] = !arr[x][y - 1];
  			}
  			if ((y + 1) < length) {
  					arr[x][y + 1] = !arr[x][y + 1];
  			}

			setBoard(arr);
		});

		const checkBoard = () => {
			for (let i = 0; i < length; i++) {
				for (let j = 0; j < length; j++) {
					if (!arr[i][j]) {
						return false;
					}
				}
			}
			audio1.play();
			$("#level-modal").show();

			let newArr = [];
			for (let i = 0; i < (length + 1); i++) {
				newArr[i] = [];
				for (let j = 0; j < (length + 1); j++) {
					newArr[i][j] = false;
				}
			}

			arr = newArr;
			length = arr.length;
			setBoard(arr);
		};

		setTimeout(checkBoard,300);
	}

	setBoard(arr);

	$(".restart").click(() => {
		arr = [ [false, false], [false, false] ];
    length = arr.length;
		setBoard(arr);
	});

	$(".retry").click(() => {
		arr = [];
		for (let i = 0; i < length; i++) {
			arr[i] = [];
			for (let j = 0; j < length; j++) {
				arr[i][j] = false;
			}
		}
		setBoard(arr);
	});

	function muteMe(elem) {
    elem.muted = true;
    elem.pause();
	}

	$(".mute").click(() => {
    document.querySelectorAll("audio").forEach( elem => muteMe(elem) );
});

	$(".instructions").click(() => {
		$("#rule-modal").show();
	});

	$(".play-button").click(() => {
		$(".modal").hide();
	});

});
