import { Component } from "@angular/core";

@Component({
    selector: "footer",
    styleUrls: ["./footer.scss"],
    template: `
            <div id="footer">
        <div class="footer-container">
            <div class="copyright">© 2023 TheMealDB <br>Proudly built in the UK</div>
            <div class="social">
                <p>Socials: 
                    <a href=""><i class="fa-brands fa-facebook"></i></a> 
                    <a href=""><i class="fa-brands fa-x-twitter"></i></a>  
                    <a href=""><i class="fa-brands fa-discord"></i></a>   
                </p>

                <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="">
                <img src="https://www.themealdb.com/images/logo-tadb.png" alt="">
                <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="">
            </div>
            <div class="contact">
                <a href="">About</a>
                <a href="">Faq</a>
                <a href="">Contact</a>
            </div>
        </div>
        </div>
    `
})


export class Footer{}