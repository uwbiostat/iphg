<?php

/**
 * @file
 * TaraCustom theme settings.
 *
 * TaraPro hardcodes theme_get_setting(..., 'tarapro'), so the Slider Code
 * form always reloads the parent theme value even when this subtheme is saved.
 * Re-point those fields at the theme being edited.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function taracustom_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $theme = $form_state->getBuildInfo()['args'][0] ?? 'taracustom';
  if ($theme !== 'taracustom' || empty($form['slider'])) {
    return;
  }

  $slider_fields = [
    ['slider', 'slider_enable_option', 'slider_show'],
    ['slider', 'time', 'slider_time'],
    ['slider', 'Slider_animation', 'slider_animatein'],
    ['slider', 'Slider_animation', 'slider_animateout'],
    ['slider', 'slider_dots_field', 'slider_dots'],
    ['slider', 'slider_layered_tab', 'slider_images_section', 'slider_images'],
    ['slider', 'slider_code'],
  ];

  foreach ($slider_fields as $parents) {
    $key = end($parents);
    $ref = &$form;
    foreach ($parents as $parent) {
      if (!isset($ref[$parent])) {
        continue 2;
      }
      $ref = &$ref[$parent];
    }
    $ref['#default_value'] = theme_get_setting($key, $theme);
    unset($ref);
  }
}
