$(() => {
	if ($(window).width() < 750) $(".container").css("max-width", "100%");
	const RECORD = [0,1,4,5,4,15,28,33,40,25,44,55,72,105,56,117];
	let count = 0;
	let length = +localStorage.getItem("level") || 2;
	let arr = new Array(length).fill(null).map(() => new Array(length).fill(false));
	let clickEffect = $("#mysoundclip")[0];
	let finishMusic = $("#mysoundclip1")[0];
	let music = true;
	let dWidth = $(".container").width();
	renderBoard();

	function renderBoard() {
    let board = $(".board");
		let counter = $("#count");
		counter.html(count);
		let mini = $("#record");
		mini.html(RECORD[length]);
		board.empty();

		for (let i = 0; i < length; i++) {
			let row = (`<div class="row" idx=${i} ></div>`);
			board.append(row);

			for (let j = 0; j < length; j++) {
				let width = (dWidth - 30 - (length * 2)) / length;
				let square = ('<div class="square" ></div>');
				board.children(".row").eq(i).append(square)
					.find(".square").eq(j).attr("pos", i + "," + j)
					.css({"width": width, "height": width})
					.addClass(() => {
						if (!arr[i][j]) return "unselected";
					});
			}
		}

		$(".square").click(function() {
			count++;
			if (music) clickEffect.play();
			let position = $(this).attr("pos").split(",");
			let x = Number(position[0]);
			let y = Number(position[1]);
			handleClick(x,y);
		});
	}

	const checkBoard = () => {
		for ( let i = 0; i < length; i++) {
			if ( arr[i].includes(false)) return;
		}
		if (music) finishMusic.play();
		$("#level-modal").show();
		setBoard(length+1);
	};

	const setBoard = (len) => {
		arr = new Array(len).fill(null).map(() => new Array(len).fill(false));
		length = len;
		localStorage.setItem("level", length);
		count = 0;
		renderBoard();
	};

	const handleClick = (x,y) => {
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
		renderBoard();
		setTimeout(() => checkBoard(), 1000);
	};


	$(".restart").click(() => setBoard(2));
	$(".retry").click(() => setBoard(length));

	$('i.button').click(() => {
		$('i.button').toggleClass("fa-volume-up fa-volume-off");
		if (music) {
			music = false;
			$('#mute').html("Unmute");
		}else {
			music = true;
			$('#mute').html("Mute");
		}
	});

	$(".instructions").click(() => $("#rule-modal").show());
	$(".play-button").click(() => $(".modal").hide());

});
