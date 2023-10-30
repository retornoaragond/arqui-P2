import __nuxt_component_0 from "./HeaderView-f6ad7ae6.js";
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
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ohash";
const __slug__vue_vue_type_style_index_0_scoped_e54e7683_lang = "";
const _sfc_main = {
  __name: "[_slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: composer, refresh: rComposer } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Composers/${route.params._slug}`, "$80no9nMKuz")), __temp = await __temp, __restore(), __temp);
    rComposer();
    const { data: albums, refresh: rAlbum } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"composerId._id":"${route.params._slug}"}&fields={"title":true}`, "$5eNZ8gTK3J")), __temp = await __temp, __restore(), __temp);
    rAlbum();
    const sanitizeHtml = (html) => {
      {
        return html;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e54e7683>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div class="row" data-v-e54e7683><div class="column image-column" data-v-e54e7683><img class="composer-image"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/storage/uploads${unref(composer).image.path}`)} data-v-e54e7683></div><div class="column info-column" data-v-e54e7683><h4 data-v-e54e7683>${ssrInterpolate(unref(composer).name)}</h4><b data-v-e54e7683>Nacionalidad:</b> ${ssrInterpolate(unref(composer).nationality)};<br data-v-e54e7683> <b data-v-e54e7683>Fecha de nacimiento:</b> ${ssrInterpolate(unref(composer).birth_date)}<br data-v-e54e7683> Géneros musicales: ${ssrInterpolate(unref(composer).music_genres)}<br data-v-e54e7683><br data-v-e54e7683><b data-v-e54e7683>Biografía</b><br data-v-e54e7683><div data-v-e54e7683>${sanitizeHtml(unref(composer).description)}</div><h5 data-v-e54e7683>Álbumes</h5><ul class="album-list" data-v-e54e7683><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li class="album-item" data-v-e54e7683>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/albums/` + album._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(album.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(album.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/composers/[_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e54e7683"]]);
export {
  __slug_ as default
};
//# sourceMappingURL=__slug_-e3e817fb.js.map
