import Plugin from './plugin';
import {id as pluginId} from './manifest';
import 'katex/dist/katex.min.css';

window.registerPlugin(pluginId, new Plugin());
