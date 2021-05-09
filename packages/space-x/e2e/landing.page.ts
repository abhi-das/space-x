import { Selector } from "testcafe";

export default class LandingPage {
    title = Selector('h1');
    subTitle = Selector('.sub-title');
    nav = Selector('.nav-list').find('.nav-list-item');
    launchItem = Selector('.launch-list').find('.launch-list-item');
    getLaunchItemByIndex = (index) => {
        return Selector(this.launchItem).nth(index);
    }
    getLaunchItemContent = (index) => {
        const item = this.getLaunchItemByIndex(index);
        return item.find('.content');
    }
    getLaunchItem = (index) => {
        const item = this.getLaunchItemContent(index);
        return item.find('a');
    }

}