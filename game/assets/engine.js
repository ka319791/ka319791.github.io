const scr1 = document.getElementById('scene')
const scr2 = document.getElementById('menu')
const scr3 = document.getElementById('battle')
const time = 2000

const frames = ['fir', 'sec', 'thi', 'fou', 'fif'];
const slash = document.getElementById("sp");
let currentFrame = 0;

function start() {
    document.getElementById('st').style.display = 'none';
    showFrame(0);
}

function showFrame(index) {
    if (index >= frames.length) return SwitchToMenu();
    const frame = document.getElementById(frames[index]);
    const i1 = frame.querySelector(".i1");
    const i2 = frame.querySelector(".i2");
    const type1 = frame.querySelector(".typewr");
    const type2 = frame.querySelector(".typewr2");
    frame.style.display = "flex";

    if (currentFrame ===0){
        i1.style.display = 'block';
        type1.style.display = 'block';
    }

    setTimeout(() => {
        i1.style.display = "block";
        type1.style.display = "block";
        if (frames[index] === 'fir' && slash) {setTimeout(() =>{slash.style.display = "block"; i1.style.display = "none";}, time/2)};
    }, time);

    setTimeout(() => {
        i1.style.display = "none";
        type1.style.display = "none";
        if (slash) slash.style.display = "none";
        i2.style.display = "block";
        type2.style.display = "block";
    }, time);

    setTimeout(() => {
        frame.style.display = "none";
        i2.style.display = "none";
        type2.style.display = "none";
        
        showFrame(index + 1);
    }, time);
}

function SwitchToMenu() {
    scr1.style.display = 'none';
    scr2.style.display = 'flex';
    initMenu()
}

const difficulties = ['easy', 'normal', 'hard'];
let currentSelection = 0;
const menuItems = document.querySelectorAll('.dif h1');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const soul = document.getElementById('select');
const glow = document.getElementById('glow');

function initMenu() {
    updateSoulPosition();
    document.addEventListener('keydown', handleMenuKeyPress);
}

function handleMenuKeyPress(e) {
    if (e.key === 'w' || e.key === 'ц' || e.key === 'ArrowUp') {
        currentSelection = Math.max(0, currentSelection - 1);
        updateSoulPosition();
    } else if (e.key === 's' || e.key === 'ы' || e.key === 'ArrowDown') {
        currentSelection = Math.min(menuItems.length - 1, currentSelection + 1);
        updateSoulPosition();
    } else if (e.key === 'Enter') {
        switchStyleShit()
    }
}

function updateSoulPosition() {
    if (menuItems[currentSelection]) {
        const itemRect = menuItems[currentSelection].getBoundingClientRect();
        easy.style.textShadow = '';
        easy.style.color = 'white';
        normal.style.textShadow = '';
        normal.style.color = 'white';
        hard.style.textShadow = '';
        hard.style.color = 'white';
        
        if (currentSelection===0){
            easy.style.textShadow = '0, 0, 10, rgba(255, 240, 80, 0.4)';
            easy.style.color = 'yellow';
        } else if (currentSelection===1) {
            normal.style.textShadow = '0, 0, 10, rgba(255, 240, 80, 0.4)';
            normal.style.color = 'yellow';
        } else if (currentSelection===2) {
            hard.style.textShadow = '0, 0, 10, rgba(255, 240, 80, 0.4)';
            hard.style.color = 'yellow';
        }
        const containerRect = document.querySelector('.dif').getBoundingClientRect();
        
        soul.style.left = (itemRect.left - 60) + 'px';
        soul.style.top = (itemRect.top + itemRect.height / 2 - 21) + 'px';

        glow.style.left = (itemRect.left - 45) + 'px';
        glow.style.top = (itemRect.top + itemRect.height / 2 - 10) + 'px';


    }
}

function switchStyleShit(){
    scr1.style.display = 'none';
    scr2.style.display = 'none';
    scr3.style.display = 'flex';
    
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        if (link.href.includes('assets/scene/great.css')) {
            link.disabled = true;
        }
    });

    const newStyle = document.createElement('link');
    newStyle.rel = 'stylesheet';
    newStyle.href = 'assets/battle/battle.css';
    document.head.appendChild(newStyle);

    document.removeEventListener('keydown', handleMenuKeyPress);

    const ss = new Battle(currentSelection);
}

class Battle {
    constructor(difficulty) {
        this.turn = 1;
        this.dif = difficulty;
        this.papat = (499*this.dif**2 -498.5*this.dif + 0.5)*20;
        console.log(this.papat)
        this.paphp = 680;
        this.curhp = 92;
        this.maxhp = 92;
        this.cKeys = new Set(['Shift','x','ч']);
        this.ekeys = new Set(['Enter','z','я']);
        this.xpKeys = new Set(['d','в','ArrowRight']);
        this.xmKeys = new Set(['a','ф','ArrowLeft']);
        this.ypKeys = new Set(['s','ы','ArrowDown']);
        this.ymKeys = new Set(['w','ц','ArrowUp']);

        this.static = document.getElementById('peace');
        this.warzone = document.getElementById('war');
        this.numatk = 0;
        this.hearts = document.querySelector('.HeartShaped');
        this.warbox = document.getElementById('war');
        this.soulX = 0;
        this.soulY = 0;
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false
        };
        this.speed = 5;
        this.gameLoopId = null;
        this.attackData = null;
        this.bullets = [];
        this.bulletContainer = null;
        this.currentAttack = null;

        this.posmenu = 0;
        this.xmenu = 0;
        this.ymenu = 0;
        this.butx =  0;
        this.bag = 4;
        this.attackInProgress = false;

        this.pictures = ['assets/battle/img/fightc.png','assets/battle/img/actc.png','assets/battle/img/itemc.png','assets/battle/img/mercyc.png']

        this.fightpic = document.getElementById('fightb');
        this.actpic = document.getElementById('actb');
        this.itempic = document.getElementById('itemb');
        this.mercypic = document.getElementById('mercyb');

        this.fightbut = document.getElementById('fight');
        this.actbut = document.getElementById('act');
        this.itembut = document.getElementById('item');
        this.mercybut = document.getElementById('mercy');
        this.dmgt = document.getElementById('dmgt');

        this.text = document.getElementById('textbox');
        this.act = document.getElementById('Act-Options');
        this.item = document.getElementById('Items');
        this.fightBar = document.getElementById('Fight-bar');
        this.scroll = document.getElementById('scroll-thing');
        this.works = [this.fightBar,this.act,this.item,0]

        this.check = document.getElementById('checks');
        this.kys = document.getElementById('kys');
        this.temu = document.getElementById('temu');
        this.insult = document.getElementById('insult');
        this.actmas = [[this.check, this.kys],[this.temu, this.insult]];

        this.papysvic = document.getElementById('papys');

        this.actions = [
            [`Papyrus HP: 680 AT: ${this.papat} DF: 60`,
            '* His face darkened slightly'],
            ['* He doesn`t show any emotions',
            '* His face expressed disgust']
        ];
        
        this.eating = [['* Recovered 60 HP','* Recovered 40 HP'], ['* Recovered 40 HP','* Recovered 40 HP']];

        this.food = [[], []];
        
        setTimeout(() => {
            this.steak = document.getElementById('steak');
            this.lh0 = document.getElementById('lh0');
            this.lh1 = document.getElementById('lh1');
            this.lh2 = document.getElementById('lh2');
            
            if (this.steak && this.lh0 && this.lh1 && this.lh2) {
                this.food[0][0] = this.steak;
                this.food[0][1] = this.lh0;
                this.food[1][0] = this.lh1;
                this.food[1][1] = this.lh2;
            } else {
                this.food = [[null, null], [null, null]];
            }
        }, 0);

        this.subMenuDis();

        document.addEventListener('keydown', (e) => this.keywork(e));
        document.addEventListener('keyup', (e) => this.handleKeyRelease(e));
    }

    loadAttacksSync() {
        this.attackData = {
            "attacks": [
                {
                    "id": "bones_circle",
                    "name": "Костяной круг",
                    "type": "pattern",
                    "bullets": [
                        {"type": "bone", "x": 100, "y": 100, "speedX": 0, "speedY": 2, "damage": 10},
                        {"type": "bone", "x": 200, "y": 100, "speedX": 1.5, "speedY": 1.5, "damage": 10},
                        {"type": "bone", "x": 300, "y": 100, "speedX": 2, "speedY": 0, "damage": 10},
                        {"type": "bone", "x": 400, "y": 100, "speedX": 1.5, "speedY": -1.5, "damage": 10},
                        {"type": "bone", "x": 500, "y": 100, "speedX": 0, "speedY": -2, "damage": 10}
                    ],
                    "duration": 3000
                },
                {
                    "id": "bone_spiral",
                    "name": "Костяная спираль",
                    "type": "spawner",
                    "bulletTemplate": {"type": "bone", "damage": 8},
                    "spawnPattern": {
                        "count": 12,
                        "interval": 200,
                        "startAngle": 0,
                        "angleStep": 30,
                        "speed": 2
                    },
                    "duration": 4000
                },
                {
                    "id": "horizontal_wave",
                    "name": "Горизонтальная волна",
                    "type": "pattern",
                    "bullets": [
                        {"type": "bone", "x": 50, "y": 100, "speedX": 2, "speedY": 0, "damage": 8},
                        {"type": "bone", "x": 50, "y": 150, "speedX": 2, "speedY": 0, "damage": 8},
                        {"type": "bone", "x": 50, "y": 200, "speedX": 2, "speedY": 0, "damage": 8},
                        {"type": "bone", "x": 550, "y": 100, "speedX": -2, "speedY": 0, "damage": 8},
                        {"type": "bone", "x": 550, "y": 150, "speedX": -2, "speedY": 0, "damage": 8},
                        {"type": "bone", "x": 550, "y": 200, "speedX": -2, "speedY": 0, "damage": 8}
                    ],
                    "duration": 2500
                }
            ]
        };
    }

    keywork(e) {
        if (this.turn) {
            if (this.turn) {
                if (this.attackInProgress && this.ekeys.has(e.key)) {
                    if (this.stopAttackLine) {
                        this.stopAttackLine();
                    }
                    return;
                }
            }

            if (this.ekeys.has(e.key)) {
                this.choice(1);
            } else if (this.cKeys.has(e.key)) {
                this.choice(0)
            }

            if (this.xpKeys.has(e.key)) {
                this.xmenu = (this.xmenu + 1)%4
                this.moveMenu();
            } else if (this.xmKeys.has(e.key)) {
                this.xmenu = Math.max(0, this.xmenu - 1)
                this.moveMenu();
            }

            if (this.ypKeys.has(e.key) && this.posmenu) {
                this.ymenu = (this.ymenu + 1)%2
                this.moveMenu();
            } else if (this.ymKeys.has(e.key) && this.posmenu) {
                this.ymenu = Math.max(0, this.ymenu - 1)
                this.moveMenu();
            }
        } else {
            if (this.xpKeys.has(e.key)) this.keys.right = true;
            if (this.xmKeys.has(e.key)) this.keys.left = true;
            if (this.ypKeys.has(e.key)) this.keys.down = true;
            if (this.ymKeys.has(e.key)) this.keys.up = true;
            
            if (!this.gameLoopId && (!this.turn)) {
                this.startGameLoop();
            } 
        }
    } 

    choice(ZorX){
        if (ZorX && !this.posmenu) {
            this.mainMenuDis();
        } else if (!ZorX && this.posmenu) {
            this.hide();
        } else if (ZorX && this.posmenu) {
            this.dowork();
        }
    }

    moveMenu() {
        if (!this.posmenu) {
            this.subMenuDis();
        } else if (this.posmenu) {
            this.highlight(this.butx);
        }
    }

    subMenuDis() {
        this.text.textContent = '[TEXT]';
        const pics = [this.fightpic, this.actpic, this.itempic, this.mercypic];
        const buttons = [this.fightbut, this.actbut, this.itembut, this.mercybut];
        const normalSources = [
            'assets/battle/img/fight.png',
            'assets/battle/img/act.png',
            'assets/battle/img/items.png',
            'assets/battle/img/mercy.png'
        ];
        
        for (let i = 0; i < 4; i++) {
            pics[i].src = normalSources[i];
            if (buttons[i]) {
                buttons[i].style.borderColor = 'rgb(222,111,39)';
            }
        }
        
        pics[this.xmenu].src = this.pictures[this.xmenu];
        if (buttons[this.xmenu]) {
            buttons[this.xmenu].style.borderColor = 'rgb(255,255,64)';
        }
    }
    
    mainMenuDis() {
        this.posmenu = !this.posmenu;
        this.ymenu = 0;

        if (this.xmenu === 2 && this.bag === 0) {
            this.posmenu = false;
            this.text.style.display = 'flex';
            this.text.textContent = '* No items left';
            return;
        }

        switch (this.works[this.xmenu]){
            case 0:
                this.text.style.display = 'flex';
                this.text.textContent = '* Not an option';
                this.act.style.display = 'none';
                this.fightBar.style.display = 'none';
                this.item.style.display = 'none';
                break;

            case this.fightBar:
                this.text.style.display = 'flex';
                this.text.textContent = '* Papyrus';
                this.act.style.display = 'none';
                this.item.style.display = 'none';
                break;
                
            default:
                this.text.style.display = 'none';
                const selmenu = this.works[this.xmenu];
                selmenu.style.display = 'flex';

                const rows = selmenu.querySelectorAll('.row');
                rows.forEach(row => {
                    row.style.display = 'flex';
                });
                break;
        }

        this.butx = this.xmenu;
        this.xmenu = 0;

        this.highlight(this.butx);
    }

    highlight(x){
        let xmenu = this.xmenu % 2;

        switch (x) {
            case 0:
                this.text.textContent = '* Papyrus';
                this.text.style.display = 'flex';
                break;
            case 1:
                for (const i of this.actmas){
                    for (const j of i){
                        j.style.color = 'white';
                    }
                }
                this.actmas[xmenu][this.ymenu].style.color = 'yellow';
                break;
            case 2:
                if (!this.food || this.bag === 0) {
                    break;
                }

                for (let i = 0; i < this.food.length; i++) {
                    if (this.food[i]) {
                        for (let j = 0; j < this.food[i].length; j++) {
                            const element = this.food[i][j];
                            if (element && element.style) {
                                element.style.color = 'white';
                            }
                        }
                    }
                }
                
                if (this.food[xmenu] && 
                    this.food[xmenu][this.ymenu] && 
                    this.food[xmenu][this.ymenu].style) {
                    this.food[xmenu][this.ymenu].style.color = 'yellow';
                }
                break;
        }
    }

    hide() {
        this.posmenu = !this.posmenu;
        this.text.style.display = 'block';
        this.act.style.display = 'none';
        this.fightBar.style.display = 'none';
        this.item.style.display = 'none';
        this.scroll.style.display = 'none';
        this.xmenu = this.butx;
        this.ymenu = 0;
    }

    dowork() {
        const selmenu = this.works[this.xmenu];
        const rows = selmenu.querySelectorAll('.row');
        this.text.style.display = 'flex';

        switch (this.butx) {
            case 0:
                this.attack();
                break;
            case 1:
                selmenu.style.display = 'none';
                rows.forEach(row => {
                    row.style.display = 'none';
                });
                
                this.actfin(this.xmenu,this.ymenu);
                break;
            case 2:
                if (this.bag === 0) {
                    console.log('was')
                    this.text.textContent = '* No items left';
                    break;
                } else {
                    if (this.food && 
                        this.food[this.xmenu] && 
                        this.food[this.xmenu][this.ymenu]) {
                        
                        selmenu.style.display = 'none';
                        rows.forEach(row => {
                            row.style.display = 'none';
                        });
                        this.eatitem(this.xmenu, this.ymenu);
                    } else {
                        this.text.textContent = '* Item already used';
                        this.posmenu = false;
                    }
                }
                break;
        }
    }

    actfin(x,y) {
        this.text.textContent = this.actions[x][y];
        this.turn = !this.turn;
        this.hide();
        setTimeout(() => this.battlestart(), 5000);
    }

    eatitem(x,y) {
        if (!this.food[x] || !this.food[x][y]) {
            this.text.textContent = '* Item already used';
            this.hide();
            return;
        }
        
        this.text.textContent = this.eating[x][y];
        
        this.food[x][y].remove();

        this.food[x][y] = null;
        
        this.bag--;
        this.hide();
        this.heal(this.eating[x][y]);
        
        setTimeout(() => this.battlestart(), 5000);
    }

    heal(type) {
        this.turn = !this.turn;
        if (type === '* Recovered 40 HP') {
            this.curhp = Math.min(this.maxhp, this.curhp + 40)
        } else if (type === '* Recovered 60 HP') {
            this.curhp = Math.min(this.maxhp, this.curhp + 60)
        }
        this.updateHealthBar();
    }

    attack() {
        this.text.style.display = 'none';
        this.fightBar.style.display = 'block';
        this.scroll.style.display = 'block';
        
        this.fightBar.style.transform = 'scaleX(0)';
        this.fightBar.style.transformOrigin = 'center';
        this.scroll.style.left = '0';
        
        this.fightBar.style.animation = 'none';
        
        void this.fightBar.offsetWidth;
        
        setTimeout(() => {
            this.fightBar.style.animation = 'expandFightBar 0.5s ease-out forwards';
            
            this.fightBar.addEventListener('animationend', () => {
                this.fightBar.style.transform = 'none';
                this.fightBar.style.animation = 'none';
                
                this.scrlmove();
            }, { once: true });
        }, 10);
    }

    scrlmove() {
        const container = this.fightBar;
        const line = this.scroll;
        const centerX = container.offsetWidth / 2;
        
        let position = 0;
        let velocity = 0;
        let acceleration = 0.3;
        let direction = 1;
        let animationId = null;
        let isMoving = true;
        
        this.attackInProgress = true;

        const stopAttack = () => {
            if (!isMoving) return;
            
            isMoving = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            const distanceToCenter = Math.abs(position - centerX);
            const maxDistance = container.offsetWidth / 2;
            const accuracy = Math.max(0, Math.round(100 * (1 - distanceToCenter / maxDistance)));

            const baseDamage = 20;
            const damage = Math.round(baseDamage * (accuracy / 100));

            this.attackfin(damage);
            
            setTimeout(() => {
                this.fightBar.style.display = 'none';
                this.scroll.style.display = 'none';
                
                this.attackInProgress = false;
                
                setTimeout(() => this.battlestart(), 0);
            }, 2000);
        };

        this.stopAttackLine = stopAttack;
        
        function getRandomAcceleration() {
            return 0.4 + Math.random() * 0.7;
        }
        
        const updateLine = () => {
            if (!isMoving) return;
            
            acceleration = getRandomAcceleration();
            velocity += acceleration * direction;
            position += velocity;

            if (position >= container.offsetWidth || position <= 0) {
                position = Math.max(0, Math.min(container.offsetWidth, position));
                velocity = 0;
                direction *= -1;
                acceleration = getRandomAcceleration();
            }
            
            line.style.left = position + 'px';
            
            if (isMoving) {
                animationId = requestAnimationFrame(updateLine);
            }
        };

        updateLine();
    }

    attackfin(dmg) {
    this.turn = !this.turn;
    this.dmgt.textContent = `${dmg}`;
    this.dmgt.style.display = 'block';
    
    this.dmgt.animate([
        { top: '50%', opacity: 1 },
        { top: '30%', opacity: 0 }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => this.dmgt.style.display = 'none';
    
    this.keys = { up: false, down: false, left: false, right: false };
    this.stopGameLoop();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            this.scroll.style.backgroundColor = i % 2 === 0 ? 'black' : 'white';
            this.scroll.style.borderColor = i % 2 === 0 ? 'white' : 'black';
        }, i * 100);
    }
    }

    battlestart() {
    const pics = [this.fightpic, this.actpic, this.itempic, this.mercypic];
    const buttons = [this.fightbut, this.actbut, this.itembut, this.mercybut];
    const normalSources = [
        'assets/battle/img/fight.png',
        'assets/battle/img/act.png',
        'assets/battle/img/items.png',
        'assets/battle/img/mercy.png'
    ];
    
    for (let i = 0; i < 4; i++) {
        pics[i].src = normalSources[i];
        if (buttons[i]) {
            buttons[i].style.borderColor = 'rgb(222,111,39)';
        }
    }

    this.posmenu = 0;
    this.xmenu = 0;
    this.ymenu = 0;
    this.butx = 0;
    this.attackInProgress = false;
    
    this.keys = { up: false, down: false, left: false, right: false };
    
    this.warzone.style.display = 'block';
    this.static.style.display = 'none';
    this.putsoul();
    
    // ПРОВЕРЯЕМ, загружены ли атаки
    if (!this.attackData || !this.attackData.attacks) {
        console.error('attackData не загружен! Загружаем заново...');
        this.loadAttacksSync(); // Перезагружаем если нет
        
        if (!this.attackData) {
            // Если всё равно нет, создаём дефолтные
            this.attackData = { attacks: [] };
        }
    }
    
    // Теперь безопасно запускаем атаку
    const testAttackId = 'bones_circle';
    console.log('Запускаем тестовую атаку:', testAttackId);
    this.startAttack(testAttackId);
    
    this.startGameLoop();
}

    putsoul() {
        if (this.hearts && this.warzone) {
            const containerRect = this.warzone.getBoundingClientRect();
            this.soulX = containerRect.width / 2 - 10;
            this.soulY = containerRect.height / 2 - 10;
            this.updateSoulPosition();

            this.hearts.style.display = 'block';
        }
    }

    updateSoulPosition() {
        if (!this.hearts) return;
        
        this.hearts.style.transform = `translate(${this.soulX}px, ${this.soulY}px)`;
    }  

    handleKeyRelease(e) {
        if (this.xpKeys.has(e.key)) this.keys.right = false;
        if (this.xmKeys.has(e.key)) this.keys.left = false;
        if (this.ypKeys.has(e.key)) this.keys.down = false;
        if (this.ymKeys.has(e.key)) this.keys.up = false;
        
        if (!this.keys.right && !this.keys.left && !this.keys.up && !this.keys.down) {
            this.stopGameLoop();
        }
    }

    startGameLoop() {
        if (this.gameLoopId) return;
        
        const update = () => {
            if (!this.turn) {
                let moveX = 0;
                let moveY = 0;
                
                if (this.keys.right) moveX += 1;
                if (this.keys.left) moveX -= 1;
                if (this.keys.down) moveY += 1;
                if (this.keys.up) moveY -= 1;
                
                if (moveX !== 0 && moveY !== 0) {
                    moveX *= 0.707;
                    moveY *= 0.707;
                }
                
                this.soulX += moveX * this.speed;
                this.soulY += moveY * this.speed;

                const container = this.warbox || this.warzone;
                if (container) {
                    const containerRect = container.getBoundingClientRect();
                    const maxX = containerRect.width - 20;
                    const maxY = containerRect.height - 20;
                    
                    this.soulX = Math.max(0, Math.min(maxX, this.soulX));
                    this.soulY = Math.max(0, Math.min(maxY, this.soulY));
                    
                    this.updateSoulPosition();
                }
            }
            
            this.gameLoopId = requestAnimationFrame(update);
        };
        
        this.gameLoopId = requestAnimationFrame(update);
    }

    stopGameLoop() {
        if (this.gameLoopId) {
            cancelAnimationFrame(this.gameLoopId);
            this.gameLoopId = null;
        }
    }

    createBulletContainer() {
        console.log('createBulletContainer вызван');
        
        if (!this.bulletContainer) {
            console.log('Создаем новый контейнер для пуль');
            this.bulletContainer = document.createElement('div');
            this.bulletContainer.id = 'bullet-container';
            this.bulletContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
                z-index: 10;
                background: rgba(0,0,0,0.1); /* Для отладки */
            `;
            
            if (this.warzone) {
                this.warzone.appendChild(this.bulletContainer);
                console.log('Контейнер добавлен в warzone');
            } else {
                console.error('warzone не найден!');
            }
        } else {
            console.log('Контейнер уже существует');
        }
        
        return this.bulletContainer;
    }

    createBullet(bulletDef, x, y) {
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.dataset.damage = bulletDef.damage || 10;
    bullet.dataset.type = bulletDef.type || 'bone';

    bullet.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: RED !important;
        border: 3px solid YELLOW !important;
        border-radius: 15px;
        left: ${x}px;
        top: ${y}px;
        transform-origin: center;
        pointer-events: none;
        z-index: 20;
        box-shadow: 0 0 10px white;
    `;
    
    console.log(`Создана пуля на позиции ${x}, ${y}`);
    
    return {
        element: bullet,
        x: x,
        y: y,
        speedX: bulletDef.speedX || 0,
        speedY: bulletDef.speedY || 0,
        damage: bulletDef.damage || 10
    };
    }

    startAttack(attackId) {
        console.log('=== START ATTACK ===');
        console.log('attackId:', attackId);
        console.log('attackData:', this.attackData);
        console.log('Все атаки:', this.attackData?.attacks);
        console.log('warzone:', this.warzone);
        
        if (!this.attackData) {
            console.error('attackData не инициализирован!');
            return;
        }
        
        const attack = this.attackData.attacks.find(a => a.id === attackId);
        console.log('Найдена атака:', attack);
        
        if (!attack) {
            console.error('Атака не найдена:', attackId);
            return;
        }
        
        this.currentAttack = attack;
        this.bullets = [];
        const container = this.createBulletContainer();
        
        console.log('Контейнер создан:', container);
        
        // Очищаем старые пули
        container.innerHTML = '';
        console.log('Контейнер очищен');
        
        if (attack.type === 'pattern') {
            console.log('Создаем паттерн атаки, пулей:', attack.bullets?.length);
            attack.bullets.forEach((bulletDef, index) => {
                console.log(`Создаем пулю ${index}:`, bulletDef);
                const bullet = this.createBullet(bulletDef, bulletDef.x, bulletDef.y);
                container.appendChild(bullet.element);
                this.bullets.push(bullet);
            });
        } else if (attack.type === 'spawner') {
            console.log('Создаем спавнер атаки');
            this.startSpawner(attack);
        }
        
        console.log('Всего пуль создано:', this.bullets.length);
        
        // Запускаем обновление пуль
        this.startBulletUpdate();
        
        // Останавливаем атаку через duration
        setTimeout(() => {
            console.log('Атака завершена по таймеру');
            this.stopAttack();
        }, attack.duration);
    }

    startSpawner(attack) {
        const pattern = attack.spawnPattern;
        const container = this.createBulletContainer();
        let spawned = 0;
        
        const spawnInterval = setInterval(() => {
            if (spawned >= pattern.count) {
                clearInterval(spawnInterval);
                return;
            }
            
            const angle = (pattern.startAngle + spawned * pattern.angleStep) * Math.PI / 180;
            const speedX = Math.cos(angle) * pattern.speed;
            const speedY = Math.sin(angle) * pattern.speed;
            
            const bulletDef = {
                ...attack.bulletTemplate,
                speedX: speedX,
                speedY: speedY
            };
            
            // Стартовая позиция (центр сверху)
            const startX = (this.warzone?.offsetWidth || 600) / 2 - 15;
            const startY = 0;
            
            const bullet = this.createBullet(bulletDef, startX, startY);
            container.appendChild(bullet.element);
            this.bullets.push(bullet);
            
            spawned++;
        }, pattern.interval);
        
        // Сохраняем интервал для очистки
        this.spawnInterval = spawnInterval;
    }

    startBulletUpdate() {
    console.log('startBulletUpdate вызван');
    
    const update = () => {
        if (!this.currentAttack) {
            console.log('Нет активной атаки, останавливаем обновление');
            return;
        }
        
        console.log('Обновление пуль, всего:', this.bullets.length);
        
        const container = this.warzone;
        if (!container) {
            console.error('Контейнер не найден!');
            return;
        }
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        // Обновляем позиции пуль
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const bullet = this.bullets[i];
            
            bullet.x += bullet.speedX * 3;
            bullet.y += bullet.speedY * 3;
            
            // Удаляем пули за пределами экрана
            if (bullet.x < -50 || bullet.x > containerWidth + 50 || 
                bullet.y < -50 || bullet.y > containerHeight + 50) {
                console.log('Пуля удалена за пределами экрана');
                bullet.element.remove();
                this.bullets.splice(i, 1);
                continue;
            }
            
            // Обновляем позицию на экране
            bullet.element.style.left = bullet.x + 'px';
            bullet.element.style.top = bullet.y + 'px';
            
            // Проверка столкновения с душой
            this.checkCollision(bullet);
        }
        
        // Продолжаем обновление если есть пули или активная атака
        if (this.bullets.length > 0 || this.currentAttack) {
            this.bulletUpdateId = requestAnimationFrame(update.bind(this));
        } else {
            console.log('Нет пуль, останавливаем обновление');
        }
    };
    
    this.bulletUpdateId = requestAnimationFrame(update.bind(this));
    }

    checkCollision(bullet) {
        if (!this.hearts) return;
        
        const heartRect = this.hearts.getBoundingClientRect();
        const bulletRect = bullet.element.getBoundingClientRect();
        
        // Простая AABB коллизия
        if (heartRect.left < bulletRect.right &&
            heartRect.right > bulletRect.left &&
            heartRect.top < bulletRect.bottom &&
            heartRect.bottom > bulletRect.top) {
            
            // Попадание!
            this.onBulletHit(bullet);
            
            // Удаляем пулю
            bullet.element.remove();
            const index = this.bullets.indexOf(bullet);
            if (index > -1) this.bullets.splice(index, 1);
        }
    }

    onBulletHit(bullet) {
        // Наносим урон
        const damage = bullet.damage;
        this.curhp = Math.max(0, this.curhp - damage);
        
        // Обновляем HP бар
        this.updateHealthBar();
        
        // Эффект попадания
        this.hearts.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        setTimeout(() => {
            if (this.hearts) this.hearts.style.backgroundColor = '';
        }, 200);
        
        console.log(`Попадание! Урон: ${damage}, HP: ${this.curhp}`);
        
        // Проверка смерти
        if (this.curhp <= 0) {
            this.gameOver();
        }
    }

    updateHealthBar() {
        const bar = document.getElementById('bar');
        const text = document.getElementById('changeAble');
        if (bar && text) {
            const percent = (this.curhp / this.maxhp) * 100;
            bar.style.width = percent + '%';
            text.textContent = `${this.curhp}/${this.maxhp}`;
        }
    }

    stopAttack() {
        this.currentAttack = null;
        
        // Очищаем интервал спавна
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
            this.spawnInterval = null;
        }
        
        // Очищаем пули
        if (this.bulletContainer) {
            setTimeout(() => {
                this.bulletContainer.innerHTML = '';
            }, 1000); // Даем время улететь за экран
        }
        
        this.bullets = [];
        
        // Останавливаем ход врага
        setTimeout(() => {
            this.turn = !this.turn;
            this.warzone.style.display = 'none';
            this.static.style.display = 'block';
            this.stopGameLoop();
        }, 1000);
    }

    gameOver() {
        console.log('Игра окончена!');
        this.stopAttack();
        this.stopGameLoop();
    }

}
