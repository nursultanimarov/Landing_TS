// import './public/style.css';
import { Header } from './src/Header'
import { Container } from './src/Container'
import { Logo } from './src/Logo'
import { Navigation } from './src/Navigation';
import { Button } from './src/Button';

const header = new Header()
const container = new Container()
const logo = new Logo()
const nav = new Navigation()
const btn = new Button()

header.append([logo.document, nav.document, btn.document])
container.append([header.document])
document.body.append(container.document)