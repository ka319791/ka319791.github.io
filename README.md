# ka319791.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обо мне</title>
    <style>
        body {
            background: linear-gradient(120deg,purple, magenta, cyan);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        #he {
            background: linear-gradient(90deg, #3498db, #2c3e50);
            color: white;
            text-align: center;
            padding: 30px 20px;
            border-radius: 30px;
            margin-bottom: 30px;
        }
        
        .slider {
            background-color: beige;
            border-radius: 30px;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .slider-container {
            position: relative;
            margin: 30px auto;
            width: 100%;
            overflow: hidden;
        }
        
        .slider-wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: 365%;
        }
        
        .card {
            flex: 0 0 25%;
            padding: 15px;
            min-height: 300px;
        }
        
        .inner {
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .inner:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .card1 .inner {
            border-top: 5px solid #3498db;
        }
        
        .card2 .inner {
            border-top: 5px solid #3498db;
        }
        
        .card3 .inner {
            border-top: 5px solid #3498db;
        }
        
        .card4 .inner {
            border-top: 5px solid #3498db;
        }
        
        .navigation {
            display: flex;
            justify-content: center;
            margin-top: 70px;
        }
        
        .arrow {
            background: #3498db;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
            margin: 0 15px;
            transition: background 0.3s ease, transform 0.2s ease;
            user-select: none;
        }
        
        .arrow:hover {
            background: #2980b9;
            transform: scale(1.1);
        }
        
        .dots {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        
        .dot {
            width: 12px;
            height: 12px;
            background: #bdc3c7;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease;
        }
        
        .dot.active {
            background: #3498db;
            transform: scale(1.2);
        }
        
        .card-counter {
            text-align: center;
            margin-top: 15px;
            color: #7f8c8d;
            font-weight: 500;
        }
        
        .photo-container {
            display: flex;
            background-color: beige;
            border-radius: 30px;
            padding: 20px;
            text-align: center;
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin: 10px 0;
        }
        
        @media (max-width: 768px) {
            .card {
                flex: 0 0 100%; 
            }
            
            .slider-wrapper {
                width: 400%; 
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header id="he">
            <h1>Я - Абдурахимов Кирилл</h1>
            <h2>Предоставляю свою личную<font size="-1">(или не очень)</font> информацию</h2>
        </header>
        
        <div class="slider">
            <div class="slider-container">
                <div class="slider-wrapper" id="sliderWrapper">
                    <div class="card card1">
                        <div class="inner">
                            <h3>Откуда я:</h3>
                            <ul>
                                <li>Я живу в этом городе</li>
                                <li>Я пришел из 2-ой школы и поступил в данное учебное заведение</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="card card2">
                        <div class="inner">
                            <h3>Мои увлечения:</h3>
                            <ul>
                                <li>Химия</li>
                                <li>Математика</li>
                                <li>Программирование</li>
                            </ul>
                            <p>Естественно, эти знания на базовом уровне, ведь я слишком ленивый</p>
                        </div>
                    </div>
                    
                    <div class="card card3">
                        <div class="inner">
                            <h3>Чем бы я хотел заниматься, если бы не моя рассеянность:</h3>
                            <ul>
                                <li>Музыка, а точнее игра пианино/синтезаторе</li>
                                <li>Рисование<font size="-1">(срисовывание по памяти)</font>. Я до этого рисовал всякий бессмысленный бред в стиле пиксель арт, но потом я понял, что этот навык не поможет хоть как-то в моей жизни</li>
                                <li>Английский язык. А я ведь ходил на кружок по нему где мы проходили материал 10-11 классов, но я все забыл</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="navigation">
                    <div class="arrow" id="prev">←</div>
                    <div class="arrow" id="next">→</div>
                </div>
                
                <div class="dots">
                    <div class="dot active" data-index="0"></div>
                    <div class="dot" data-index="1"></div>
                    <div class="dot" data-index="2"></div>
                </div>
                
                <div class="card-counter">
                    Карточка <span id="current">1</span> из <span id="total">4</span>
                </div>
            </div>
        </div>
        
        <div class="photo-container">
            <div class="more">
                <img src="mo.png">
                <p>Это я на Черном море</p>
            </div>
            <div class="ate">
                <img src="at.png">
                <p>Это мой аттестат</p>
            </div>
            <div class="gori">
                <img src="go.png">
                <p>Это я на красной поляне</p>
            </div>
        </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const sliderWrapper = document.getElementById('sliderWrapper');
            const prevBtn = document.getElementById('prev');
            const nextBtn = document.getElementById('next');
            const dots = document.querySelectorAll('.dot');
            const currentElement = document.getElementById('current');
            const totalElement = document.getElementById('total');
            let currentIndex = 0;
            const totalSlides = 3;
            totalElement.textContent = totalSlides;
            function updateSlider() {
                const offset = window.innerWidth <= 768 ? -currentIndex * 100 : -currentIndex * 25;
                sliderWrapper.style.transform = `translateX(${offset}%)`;
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                currentElement.textContent = currentIndex + 1;
            }
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            });
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateSlider();
                });
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowRight') {
                    nextBtn.click();
                } else if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                }
            });
            window.addEventListener('resize', updateSlider);
        });
    </script>
</body>
</html>
