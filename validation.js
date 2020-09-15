let x, y, r;
window.onload = function () {
    document.getElementById("button_result").onclick = function () {
        if (Xisvalid() && Yisvalid() && Risvalid()) {
            //формирование POST-запроса
            fetch("backend.php", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: "x=" + x + "&y=" + y + "&r=" + r
            }).then(function (responce) {
                responce.text().then(function (text) {
                    document.getElementById('outputTable').insertAdjacentHTML('beforeend', text);
                })
            });
        }
    }


    function notificate(message) {
        document.getElementById('notification').innerText = message;
    }

    function closeNotification() {
        document.getElementById('notification').innerText = '';
    }

    function Xisvalid() {
        x = document.getElementById("x").value;
        return true;
    }


    function Yisvalid() {
        y = document.getElementById("y").value.replace(",", ".");
        if (y === undefined) {
            notificate("Y не введен");
            return false;
        } else if (isNaN(parseFloat(y))) {
            notificate("Y не число");
            return false;
        } else if (!((y > -3) && (y < 3))) {
            notificate("Y не входит в область допустимых значений");
            return false;
        } else {
            closeNotification();
            return true;
        }
    }


    function Risvalid() {
        try {
            r = document.querySelector("input[type=radio]:checked").value;
            return true;
        } catch (error) {
            notificate("R не выбрано");
            return false;
        }
    }
}
