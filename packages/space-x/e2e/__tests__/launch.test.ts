import { ClientFunction } from 'testcafe';
import LandingPage from '../landing.page';

const landingPage = new LandingPage();
const getLocation = ClientFunction(() => document.location.href);

fixture`Test scenarios for filtered launches`.page`http://localhost:3000`;

test('launch', async (t) => {
    await t
        .expect(landingPage.title.innerText)
        .contains('Space-x Launch Programs');
})

test('Browse all launch page', async (t) => {
    await t
        .click(landingPage.nav)
        .expect(getLocation()).contains('/launch')
})

test('Visit individual launch detail page', async (t) => {
    await t
        .click(landingPage.getLaunchItem(0))
        .expect(getLocation()).contains('/launch/1011')
        .expect(landingPage.subTitle.innerText).contains('FalconSat');
})
