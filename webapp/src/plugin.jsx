import LatexBlock from 'latex_block';

export default class LatexPlugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry) {
        registry.registerLatexPlugin(LatexBlock);
    }
}
