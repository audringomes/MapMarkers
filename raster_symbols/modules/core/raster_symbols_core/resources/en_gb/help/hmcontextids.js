var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["cshid"]) return decodeURIComponent(hmContextIds[params["cshid"]]);
    else return "";
}

hmContextIds["40305"]="psyms_picture-symbols.htm";
hmContextIds["40302"]="psyms_features.htm";
hmContextIds["40385"]="psyms_user-help.htm";
hmContextIds["40378"]="psyms_draw_option_toolbar.htm";
hmContextIds["40403"]="psyms_options-panel.htm";
hmContextIds["40399"]="psyms_design.htm";
hmContextIds["40311"]="psyms_definitions.htm";
hmContextIds["40363"]="psyms_colour.htm";
hmContextIds["40312"]="psyms_properties.htm";
hmContextIds["40313"]="psyms_type.htm";
hmContextIds["40319"]="psyms_name.htm";
hmContextIds["40325"]="psyms_pixel-offset.htm";
hmContextIds["40338"]="psyms_fixed-size_.htm";
hmContextIds["40347"]="psyms_draw_size_mm.htm";
hmContextIds["40345"]="psyms_string_selector.htm";
hmContextIds["40352"]="psyms_draw_text_string_.htm";
hmContextIds["40326"]="psyms_text-picture-justification.htm";
hmContextIds["40329"]="psyms_text-justification.htm";
hmContextIds["40355"]="psyms_text_coordinate.htm";
hmContextIds["40354"]="psyms_text_box.htm";
hmContextIds["40353"]="psyms_text_scale_factor.htm";
hmContextIds["40327"]="psyms_text-style.htm";
hmContextIds["40328"]="psyms_highlight-text-style.htm";
hmContextIds["40346"]="psyms_value_selector.htm";
hmContextIds["40351"]="psyms_value_scale.htm";
hmContextIds["40356"]="psyms_goto_line_style.htm";
hmContextIds["40357"]="psyms_goto_area_style.htm";
hmContextIds["40309"]="psyms_raster--grid.htm";
hmContextIds["40365"]="psyms_colourmap.htm";
hmContextIds["40336"]="psyms_thumbnail-picture-symbol.htm";
hmContextIds["40387"]="psyms_administration.htm";
hmContextIds["40322"]="psyms_organisation.htm";
hmContextIds["40390"]="psyms_installation.htm";
hmContextIds["40396"]="psyms_authorisation.htm";
hmContextIds["40358"]="psyms_image-magick.htm";
hmContextIds["40405"]="psyms_load-from-prompt.htm";
hmContextIds["40386"]="psyms_configuration.htm";
hmContextIds["40395"]="psyms_plugin-configuration.htm";
hmContextIds["40304"]="psyms_default_settings.htm";
hmContextIds["40314"]="psyms_default-symbol.htm";
hmContextIds["40394"]="psyms_mappings.htm";
hmContextIds["40308"]="psyms_custom-symbol.htm";
hmContextIds["40316"]="psyms_the-none-symbol.htm";
hmContextIds["40315"]="psyms_xml-configuration.htm";
hmContextIds["40300"]="psyms_development-gui.htm";
hmContextIds["40323"]="psyms_modules.htm";
hmContextIds["40324"]="psyms_symbol-(definition)-list.htm";
hmContextIds["40317"]="psyms_preview-canvas.htm";
hmContextIds["40339"]="psyms_picture-symbol-properties.htm";
hmContextIds["40361"]="psyms_goto-mapping-tab.htm";
hmContextIds["40362"]="psyms_rwo-style-mapping-tab.htm";
hmContextIds["40406"]="psyms_default-settings-tab.htm";
hmContextIds["40335"]="psyms_draw.htm";
hmContextIds["40330"]="psyms_highlight_.htm";
hmContextIds["40310"]="psyms_speed.htm";
hmContextIds["40366"]="psyms_add-symbol.htm";
hmContextIds["40368"]="psyms_realise.htm";
hmContextIds["40367"]="psyms_delete-symbol-(definition).htm";
hmContextIds["40379"]="psyms_follow-selection.htm";
hmContextIds["40377"]="psyms_refresh.htm";
hmContextIds["40376"]="psyms_style-versions.htm";
hmContextIds["40332"]="psyms_save.htm";
hmContextIds["40401"]="psyms_save-as.htm";
hmContextIds["40380"]="psyms_usage.htm";
hmContextIds["40331"]="psyms_operating-mode.htm";
hmContextIds["40371"]="psyms_route-manager.htm";
hmContextIds["40397"]="psyms_value-mapping2.htm";
hmContextIds["40407"]="psyms_changing-the-default-symbol.htm";
hmContextIds["40411"]="psyms_flash-mapping.htm";
hmContextIds["40307"]="psyms_custom-styles_2.htm";
hmContextIds["40318"]="psyms_api.htm";
hmContextIds["40334"]="psyms_drawing.htm";
hmContextIds["40344"]="psyms_retrieving-symbols.htm";
hmContextIds["40333"]="psyms_creation.htm";
hmContextIds["40341"]="psyms_handling-mappings.htm";
hmContextIds["40342"]="psyms_using-statistical-engines.htm";
hmContextIds["40400"]="psyms_processing-configuration-files.htm";
hmContextIds["40404"]="psyms_new-topic.htm";
hmContextIds["40301"]="psyms_design-considerations.htm";
hmContextIds["40409"]="psyms_product-tests.htm";
hmContextIds["40408"]="psyms_unit-tests.htm";
hmContextIds["40410"]="psyms_demos.htm";
hmContextIds["40389"]="psyms_tools.htm";
hmContextIds["40320"]="psyms_drawing-speed-monitor.htm";
hmContextIds["40321"]="psyms_draw-symbols.htm";
hmContextIds["40359"]="psyms_value-analyzer.htm";
hmContextIds["40360"]="psyms_properties2.htm";
hmContextIds["40370"]="psyms_warnings.htm";
hmContextIds["40384"]="psyms_test2.htm";
hmContextIds["40398"]="mms_about.htm";
hmContextIds["40364"]="psyms_im.htm";
