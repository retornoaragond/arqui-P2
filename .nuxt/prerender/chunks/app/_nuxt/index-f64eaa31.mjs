import __nuxt_component_0 from './HeaderView-f6ad7ae6.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-8849d854.mjs';
import __nuxt_component_2 from './FooterView-ed279187.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/destr/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/scule/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/klona/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  async asyncData({ $content, params }) {
    const albums = await $content("albums").fetch();
    return {
      albums
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h3 data-v-e79cefd3>\xC1lbumes de M\xFAsica de Pel\xEDculas</h3><p data-v-e79cefd3>Esta secci\xF3n presenta informaci\xF3n sobre \xE1lbumes de m\xFAsica de pel\xEDculas.</p><ul class="album-list" data-v-e79cefd3><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/albums_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\xC1lbumes`);
      } else {
        return [
          createTextVNode("\xC1lbumes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/composers_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Compositores`);
      } else {
        return [
          createTextVNode("Compositores")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/movies_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pel\xEDculas`);
      } else {
        return [
          createTextVNode("Pel\xEDculas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e79cefd3"]]);

export { index as default };
//# sourceMappingURL=index-f64eaa31.mjs.map
