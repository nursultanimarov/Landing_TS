import { Header } from './src/Header'
import { Container } from './src/Container'
import { Logo } from './src/Logo'
import './public/style.css';

const header = new Header()
const container = new Container()
const logo = new Logo()

header.append([logo.document])
container.append([header.document])
document.body.append(container.document)