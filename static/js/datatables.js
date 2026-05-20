$(document).ready(function () {

    let lang = document.documentElement.lang;

    console.log("LANG =", lang);

    let dtLang = lang === "kk" ? {
		processing: "Күте тұрыңыз...",
		search: "Іздеу:",
		lengthMenu: "_MENU_ жазба көрсету",
		info: "_START_ - _END_ аралығы, барлығы _TOTAL_ жазба",
		infoEmpty: "0 жазба",
		infoFiltered: "(_MAX_ жазбадан сүзілген)",
		loadingRecords: "Жүктелуде...",
		zeroRecords: "Жазбалар табылмады",
		emptyTable: "Кестеде деректер жоқ",
		paginate: {
			first: "Бірінші",
			previous: "Алдыңғы",
			next: "Келесі",
			last: "Соңғы"
		}
    } : {
		
		processing: "Подождите...",
		search: "Поиск:",
		lengthMenu: "Показать _MENU_ записей",
		info: "Записи с _START_ до _END_ из _TOTAL_ записей",
		infoEmpty: "Записи отсутствуют",
		infoFiltered: "(отфильтровано из _MAX_ записей)",
		loadingRecords: "Загрузка...",
		zeroRecords: "Записи отсутствуют",
		emptyTable: "В таблице нет данных",
		paginate: {
			first: "Первая",
			previous: "Предыдущая",
			next: "Следующая",
			last: "Последняя"
		}
		
    };

    $('.table-manager').DataTable({
        language: dtLang
    });

});

