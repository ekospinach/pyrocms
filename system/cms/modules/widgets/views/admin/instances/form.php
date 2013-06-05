<?php echo form_open() ?>

    <header><h3><?php echo $widget->name ?></h3></header>

    <?php if ($instance): ?>
        <?php echo form_hidden('id', $instance->id) ?>
        <?php echo form_hidden('widget_id', $instance->widget_id) ?>
    <?php endif ?>

    <?php if (! empty($error)) echo $error ?>

    <ol>
        <li>
            <label for="title"><?php echo lang('widgets:instance_title') ?>:</label>
            <?php echo form_input('title', set_value('title', $instance->title)) ?>
            <span class="required-icon tooltip"><?php echo lang('required_label') ?></span>
        </li>

        <li>
            <label for="show_title"><?php echo lang('widgets:show_title') ?>:</label>
            <?php echo form_checkbox('show_title', true, isset($widget->options['show_title']) ? $widget->options['show_title'] : false) ?>
        </li>

        <?php if (isset($areas)): ?>
        <li>
            <label for="widget_area_id"><?php echo lang('widgets:widget_area') ?>:</label>
            <?php echo form_dropdown('widget_area_id', $areas, $widget->widget_area_id) ?>
        </li>
        <?php endif ?>
    </ol>
    <?php echo $form ?: '' ?>

    <div id="instance-actions" class="buttons buttons-small">
        <?php $this->load->view('admin/partials/buttons', array('buttons' => array('save', 'cancel'))) ?>
    </div>

<?php echo form_close() ?>