import __nuxt_component_0 from './HeaderView-f6ad7ae6.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-8849d854.mjs';
import __nuxt_component_2 from './FooterView-ed279187.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-8736ab90.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/estebanespinoza/Desktop/My%20bag/Universidad%20Nacional%20/arqui-P2/node_modules/ohash/dist/index.mjs';
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
  __name: "composers_index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: composers } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Composers?fields={"name":true}`, "$gV2lQuslxg")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-175d6538>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<h3 data-v-175d6538>Compositores</h3><p data-v-175d6538>Esta secci\xF3n presenta informaci\xF3n sobre composeres.</p><ul class="composer-list" data-v-175d6538><!--[-->`);
      ssrRenderList(unref(composers), (composer) => {
        _push(`<li class="composer-item" data-v-175d6538>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/composers/` + composer._id,
          class: "composer-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(composer.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(composer.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/composers_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const composers_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-175d6538"]]);

export { composers_index as default };
//# sourceMappingURL=composers_index-cedc905a.mjs.map
