 let menubtn = document.querySelector(".menu-btn")
        let closebtn = document.querySelector(".close-btn")
        let navcontainer = document.querySelector(".nav-container")
        menubtn.addEventListener("click", () => {
            navcontainer.classList.add("active")
             document.body.classList.add("scroll-off")
        })

        closebtn.addEventListener("click", () => {
            navcontainer.classList.remove("active")
             document.body.classList.remove("scroll-off")
        })

        let header = document.querySelector(".header")
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                header.classList.add("active")
            } else {
                header.classList.remove("active")
            }
        })

        let errorpage = document.querySelectorAll(".errorpage")
        errorpage.forEach((error) => {
            error.addEventListener("click", () => {
                window.location.href = "404.html"
            })
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showed");
                }
            })
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        })

        document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => {
            observer.observe(el)
        })

        const footerMail = document.getElementById("footer-mail");
        const footerBtn = document.querySelector(".footer-btn");
        const ferror = document.querySelector(".ferror");

        footerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const email = footerMail.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                ferror.textContent = "Please enter your email address";
                ferror.style.color = "black";
                return;
            }

            if (!emailPattern.test(email)) {
                ferror.textContent = "Please enter a valid email address";
                ferror.style.color = "black";
                return;
            }

            ferror.textContent = "Subscribed Successfully!";
            ferror.style.color = "green";
            footerMail.value = "";

            setTimeout(() => {
                ferror.textContent = "";
                window.location.href="404.html"
            }, 1000);
        });