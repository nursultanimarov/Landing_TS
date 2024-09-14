const container = document.createElement('div')
container.className = 'container'

const header = document.createElement('header')
header.className = 'header'

const logo = document.createElement('img')
logo.className = 'logo'
logo.src = 'https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg'
logo.alt = 'Logo'

const nav = document.createElement('nav')
nav.className = 'nav'
const ul = document.createElement('ul')

const items = [
    { text: 'Home', url: '#' },
    { text: 'Features', url: '#' },
    { text: 'Pricing', url: '#' },
    { text: 'Blog', url: '#' }
];

items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.textContent = item.text;
    a.href = item.url;

    li.appendChild(a);
    ul.appendChild(li);
});

const btn_in_header = document.createElement('button')
btn_in_header.textContent = 'Get Started'
btn_in_header.className = 'btn_in_header'

nav.append(ul)
header.append(logo, nav, btn_in_header)


//========================= Section 1 ==========================
const first_section = document.createElement('section')
first_section.className = 'first_section'

const left_side = document.createElement('div')
const h1 = document.createElement('h1')
h1.textContent = 'Grow your subscription business'

const p = document.createElement('p')
p.textContent = 'Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.'

const btn_in_first_section = document.createElement('button')
btn_in_first_section.textContent = 'Get Started'
btn_in_first_section.className = 'btn_in_first_section'

left_side.append(h1, p, btn_in_first_section)


const right_side = document.createElement('div')
const right_side_picture = document.createElement('img')
right_side_picture.src = './images/Hero3D.png'
right_side_picture.className = 'right_side_picture'

right_side.append(right_side_picture)

first_section.append(left_side, right_side)


//========================== Section 2 ================================
const second_section = document.createElement('section')
second_section.className = 'second_section'

const first_img_in_second_section = document.createElement('img')
first_img_in_second_section.src = 'https://assets.arkay.digital/uploads/2020/10/blog-images-logo-ipsum.svg'
first_img_in_second_section.className = 'section_img'
const second_img_in_second_section = document.createElement('img')
second_img_in_second_section.src = 'https://assets.arkay.digital/uploads/2020/10/blog-images-logo-ipsum.svg'
second_img_in_second_section.className = 'section_img'
const third_img_in_second_section = document.createElement('img')
third_img_in_second_section.src = 'https://assets.arkay.digital/uploads/2020/10/blog-images-logo-ipsum.svg'
third_img_in_second_section.className = 'section_img'
const fourth_img_in_second_section = document.createElement('img')
fourth_img_in_second_section.src = 'https://assets.arkay.digital/uploads/2020/10/blog-images-logo-ipsum.svg'
fourth_img_in_second_section.className = 'section_img'
const fifth_img_in_second_section = document.createElement('img')
fifth_img_in_second_section.src = 'https://assets.arkay.digital/uploads/2020/10/blog-images-logo-ipsum.svg'
fifth_img_in_second_section.className = 'section_img'

second_section.append(first_img_in_second_section, second_img_in_second_section, third_img_in_second_section, fourth_img_in_second_section, fifth_img_in_second_section)


//============================== Section 3 =======================
const third_section = document.createElement('section')
third_section.className = 'third_section'

const left_side_in_third_section = document.createElement('div')
const image_in_third_section = document.createElement('img')
image_in_third_section.src = './images/Section3.png'
image_in_third_section.className = 'image_in_third_section';

left_side_in_third_section.append(image_in_third_section)

const right_side_in_third_section = document.createElement('div')
right_side_in_third_section.className = 'right_side_in_third_section'
const h2_in_third_section = document.createElement('h2')
h2_in_third_section.textContent = 'Subscription index'

const p_in_third_section = document.createElement('p')
p_in_third_section.textContent = "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."

const link_in_third_section = document.createElement('a')
link_in_third_section.href = '#'
link_in_third_section.textContent = 'Learn more'

right_side_in_third_section.append(h2_in_third_section, p_in_third_section, link_in_third_section)

third_section.append(left_side_in_third_section, right_side_in_third_section)


//================================== Section 4 ===========================================
const fourth_section = document.createElement('section')
fourth_section.className = 'fourth_section'

const left_side_in_fourth_section = document.createElement('div')
const h2_in_fourth_section = document.createElement('h2')
h2_in_fourth_section.textContent = 'In-depth metrics'

const p_in_fourth_section = document.createElement('p')
p_in_fourth_section.textContent = "Accurate, real-time reporting at your fingertips."

const link_in_fourth_section = document.createElement('a')
link_in_fourth_section.href = '#'
link_in_fourth_section.textContent = 'Learn more'

left_side_in_fourth_section.append(h2_in_fourth_section, p_in_fourth_section, link_in_fourth_section)

const right_side_in_fourth_section = document.createElement('div')
const image_in_fourth_section = document.createElement('img')
image_in_fourth_section.src = './images/Section4.png'
image_in_fourth_section.className = 'image_in_fourth_section'
image_in_fourth_section.className = 'image_in_fourth_section'

right_side_in_fourth_section.append(image_in_fourth_section)

fourth_section.append(left_side_in_fourth_section, right_side_in_fourth_section)


//====================================== Section 5 ============================================
const fifth_section = document.createElement('section')
fifth_section.className = 'fifth_section'

const left_card_in_fifth_section = document.createElement('div')
left_card_in_fifth_section.className = 'left_card_in_fifth_section'
const img_in_left_card = document.createElement('img')
img_in_left_card.src = './images/Card.png'
const h3_in_left_card = document.createElement('h3')
h3_in_left_card.textContent = 'Benchmarks'
const p_in_left_card = document.createElement('p')
p_in_left_card.textContent = 'See how you stack up against comparable companies in similar stages.'

left_card_in_fifth_section.append(img_in_left_card, h3_in_left_card, p_in_left_card)

const middle_card_in_fifth_section = document.createElement('div')
middle_card_in_fifth_section.className = 'middle_card_in_fifth_section'
const img_in_middle_card = document.createElement('img')
img_in_middle_card.src = './images/Calculator.png'
const h3_in_middle_card = document.createElement('h3')
h3_in_middle_card.textContent = 'Pricing Audit'
const p_in_middle_card = document.createElement('p')
p_in_middle_card.textContent = 'Benchmark the health of your monetization and pricing strategy.'

middle_card_in_fifth_section.append(img_in_middle_card, h3_in_middle_card, p_in_middle_card)

const right_card_in_fifth_section = document.createElement('div')
right_card_in_fifth_section.className = 'middle_card_in_fifth_section'
const img_in_right_card = document.createElement('img')
img_in_right_card.src = './images/Camera.png'
const h3_in_right_card = document.createElement('h3')
h3_in_right_card.textContent = 'Retention Audit'
const p_in_right_card = document.createElement('p')
p_in_right_card.textContent = 'Audit where revenue leakage exists and where you can increase retention.'

right_card_in_fifth_section.append(img_in_right_card, h3_in_right_card, p_in_right_card)

fifth_section.append(left_card_in_fifth_section, middle_card_in_fifth_section, right_card_in_fifth_section)


//========================================= Footer ======================================================
const footer = document.createElement('footer')

const up_side = document.createElement('div')
up_side.className = 'up_side'
const h2_up_side = document.createElement('h2')
h2_up_side.textContent = 'Get the right plan for future product.'
const first_btn_up_side = document.createElement('button')
first_btn_up_side.className = 'first_btn_up_side'
first_btn_up_side.textContent = 'Yearly'
const second_btn_up_side = document.createElement('button')
second_btn_up_side.className = 'second_btn_up_side'
second_btn_up_side.textContent = 'Monthly'

up_side.append(h2_up_side, first_btn_up_side, second_btn_up_side)

const down_side = document.createElement('div')
const left_card_in_down_side = document.createElement('div')
const p_in_left_card_in_down_side = document.createElement('p')
p_in_left_card_in_down_side.textContent = 'Starter'
const h2_in_left_card_in_down_side = document.createElement('h2')
h2_in_left_card_in_down_side.textContent = 'Free'
const p2_in_left_card_in_down_side = document.createElement('p')
p2_in_left_card_in_down_side.textContent = '1 Website'
const p3_in_left_card_in_down_side = document.createElement('p')
p3_in_left_card_in_down_side.textContent = '5 GB Hosting'
const p4_in_left_card_in_down_side = document.createElement('p')
p4_in_left_card_in_down_side.textContent = 'Limited Support'
const btn_in_left_card_in_down_side = document.createElement('button')
btn_in_left_card_in_down_side.textContent = 'Get Started'

left_card_in_down_side.append(p_in_left_card_in_down_side, h2_in_left_card_in_down_side, p2_in_left_card_in_down_side, p3_in_left_card_in_down_side, p4_in_left_card_in_down_side, btn_in_left_card_in_down_side)

const middle_card_in_down_side = document.createElement('div')
const p_in_middle_card_in_down_side = document.createElement('p')
p_in_middle_card_in_down_side.textContent = 'Premium'
const h2_in_middle_card_in_down_side = document.createElement('h2')
h2_in_middle_card_in_down_side.textContent = '$29'
const middle_price = document.createElement('span')
middle_price.textContent = '/month'
h2_in_middle_card_in_down_side.append(middle_price)
const p2_in_middle_card_in_down_side = document.createElement('p')
p2_in_middle_card_in_down_side.textContent = '10 Website'
const p3_in_middle_card_in_down_side = document.createElement('p')
p3_in_middle_card_in_down_side.textContent = '15 GB Hosting'
const p4_in_middle_card_in_down_side = document.createElement('p')
p4_in_middle_card_in_down_side.textContent = 'Premium Support'
const btn_in_middle_card_in_down_side = document.createElement('button')
btn_in_middle_card_in_down_side.textContent = 'Get Started'

middle_card_in_down_side.append(p_in_middle_card_in_down_side, h2_in_middle_card_in_down_side, p2_in_middle_card_in_down_side, p3_in_middle_card_in_down_side, p4_in_middle_card_in_down_side, btn_in_middle_card_in_down_side)

const right_card_in_down_side = document.createElement('div')
const p_in_right_card_in_down_side = document.createElement('p')
p_in_right_card_in_down_side.textContent = 'Enterprise'
const h2_in_right_card_in_down_side = document.createElement('h2')
h2_in_right_card_in_down_side.textContent = '$49'
const right_price = document.createElement('span')
right_price.textContent = '/month'
h2_in_right_card_in_down_side.append(right_price)
const p2_in_right_card_in_down_side = document.createElement('p')
p2_in_right_card_in_down_side.textContent = 'Unlimited Website'
const p3_in_right_card_in_down_side = document.createElement('p')
p3_in_right_card_in_down_side.textContent = '50 GB Hosting'
const p4_in_right_card_in_down_side = document.createElement('p')
p4_in_right_card_in_down_side.textContent = 'Premium Support'
const btn_in_right_card_in_down_side = document.createElement('button')
btn_in_right_card_in_down_side.textContent = 'Get Started'

right_card_in_down_side.append(p_in_right_card_in_down_side, h2_in_right_card_in_down_side, p2_in_right_card_in_down_side, p3_in_right_card_in_down_side, p4_in_right_card_in_down_side, btn_in_right_card_in_down_side)

down_side.append(left_card_in_down_side, middle_card_in_down_side, right_card_in_down_side)

footer.append(up_side, down_side)

container.append(header, first_section, second_section, third_section, fourth_section, fifth_section, footer)
document.body.append(container)