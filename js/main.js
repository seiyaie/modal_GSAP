const modal = () => {
    const open = document.querySelector(".js-open-button");
    const close = document.querySelector(".js-close-button");
    const dialog = document.querySelector(".js-dialog");
    const modalBg = document.querySelector(".js-modal-bg");
    const contents = document.querySelector(".js-contents");

    const showDialog = () => {
        gsap.set(modalBg, { display: "block" });
        gsap.to(contents, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });

        gsap.to(modalBg, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const closeDialog = () => {
        gsap.to(contents, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                dialog.close();
            },
        });
        gsap.to(modalBg, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
                modalBg.style.display = "none";
            },
        });
    };

    if (!open || !close || !dialog || !modalBg || !contents) return;

    const openModal = () => {
        dialog.showModal();
        showDialog();
    };

    const closeModal = () => {
        closeDialog();
    };

    //openクリックでopenModal関数発動
    open.addEventListener("click", openModal);

    //closeクリックでcloseModal関数発動
    close.addEventListener("click", closeModal);

    //modal背景をクリックでmodal閉じる
    dialog.addEventListener("click", (e) => {
        if (!e.target.closest(".js-contents")) {
            closeModal();
        }
    });

    //escキータイプでmodal閉じる
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
        }
    });
};

modal();
