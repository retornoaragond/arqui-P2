import __nuxt_component_0 from "./HeaderView-fff0fb24.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-8849d854.js";
import __nuxt_component_2 from "./FooterView-ed279187.js";
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { u as useFetch } from "./fetch-8736ab90.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ohash";
const __slug__vue_vue_type_style_index_0_scoped_8478351f_lang = "";
const _sfc_main = {
  __name: "[_slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: album, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Albums/${route.params._slug}`, "$ratcgjAeLZ")), __temp = await __temp, __restore(), __temp);
    refresh();
    const sanitizeHtml = (html) => {
      {
        return html;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-8478351f>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div class="row" data-v-8478351f><div class="column image-column" data-v-8478351f><img class="album-image"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/storage/uploads${unref(album).image.path}`)} alt="Portada del álbum" data-v-8478351f></div><div class="column info-column" data-v-8478351f><h4 data-v-8478351f>${ssrInterpolate(unref(album).title)}</h4> Compositor: `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/composers/" + unref(album).composerId._id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(album).Composer)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(album).Composer), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-8478351f><b data-v-8478351f>Año de lanzamiento:</b> ${ssrInterpolate(unref(album).release_year)}; <br data-v-8478351f><b data-v-8478351f>Género:</b> ${ssrInterpolate(unref(album).genres)}; <br data-v-8478351f> <b data-v-8478351f>Sello discográfico:</b> ${ssrInterpolate(unref(album).record_label)}<br data-v-8478351f> Número de pistas: ${ssrInterpolate(unref(album).tracks)}<br data-v-8478351f><br data-v-8478351f><b data-v-8478351f>Descripción</b><br data-v-8478351f><div data-v-8478351f>${sanitizeHtml(unref(album).description)}</div><p data-v-8478351f>Película asociada: `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/movies/" + unref(album).movieId._id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(album).Movie)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(album).Movie), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8478351f"]]);
export {
  __slug_ as default
};
//# sourceMappingURL=__slug_-d556d700.js.map
