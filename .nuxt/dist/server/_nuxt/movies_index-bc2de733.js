import __nuxt_component_0 from "./HeaderView-f6ad7ae6.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-8849d854.js";
import __nuxt_component_2 from "./FooterView-ed279187.js";
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-8736ab90.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ohash";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
const movies_index_vue_vue_type_style_index_0_scoped_53f16629_lang = "";
const _sfc_main = {
  __name: "movies_index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: movies } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Movies?fields={"title":true}`, "$FQJdizRsdd")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-53f16629>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<h3 data-v-53f16629>Películas</h3><p data-v-53f16629>Esta sección presenta información sobre películas.</p><ul class="movie-list" data-v-53f16629><!--[-->`);
      ssrRenderList(unref(movies), (movie) => {
        _push(`<li class="movie-item" data-v-53f16629>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/movies/` + movie._id,
          class: "movie-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(movie.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(movie.title), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const movies_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53f16629"]]);
export {
  movies_index as default
};
//# sourceMappingURL=movies_index-bc2de733.js.map
