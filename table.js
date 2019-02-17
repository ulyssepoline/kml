<script language="javascript">

    function openModalDialogWithForm(event, modal, cbAfterLoad, cbAfterSuccess) {
        // If "modal" is a selector, initialize a modal object,
        // otherwise just use it
        if ($.type(modal) == 'string') {
            modal = initModalDialog(event, modal);
        }

        var url = $(event.target).data('action');
        if (!url) {
            console.log('ERROR: openModalDialogWithForm() could not retrieve action from event');
            return;
        }

        $.ajax({
            type: 'GET',
            url: url
        }).done(function(data, textStatus, jqXHR) {
            modal.find('.modal-body').html(data);
            modal.modal('show');
            formAjaxSubmit(modal, url, cbAfterLoad, cbAfterSuccess);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            alert('SERVER ERROR: ' + errorThrown);
        });
    }

</script>
