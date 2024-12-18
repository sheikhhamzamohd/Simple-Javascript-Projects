document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();

    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const monthElement = document.querySelector(".currentMonth");
    const yearElement = document.querySelector(".currentYear");
    const daysElement = document.querySelector(".days");

    displayCalendar(currentMonth, currentYear);

    function displayCalendar(month, year) {
        daysElement.innerHTML = "";

        monthElement.textContent = monthNames[month];
        yearElement.textContent = year;

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0).getDate();

        const prevMonthLastDate = new Date(year, month, 0).getDate();
        const firstDayIndex = firstDay.getDay();

        for (let i = firstDayIndex; i > 0; i--) {
            const day = prevMonthLastDate - i + 1;
            const li = document.createElement("li");
            li.textContent = day;
            li.classList.add("prev-month");
            daysElement.appendChild(li);
        }

        for (let i = 1; i <= lastDay; i++) {
            const li = document.createElement("li");
            li.textContent = i;
            if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                li.classList.add("current-day");
            }
            daysElement.appendChild(li);
        }

        const totalDays = daysElement.children.length;
        const remainingDays = 8 - (totalDays % 8);
        for (let i = 1; i <= remainingDays; i++) {
            const li = document.createElement("li");
            li.textContent = i;
            li.classList.add("next-month");
            daysElement.appendChild(li);
        }
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        displayCalendar(currentMonth, currentYear);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        displayCalendar(currentMonth, currentYear);
    });
});