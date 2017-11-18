$(function() {

    // set image bg
    setImgBg();
    function setImgBg() {
      var imgBlock = $('.hero');
      if (imgBlock.length) document.getElementById('bg-btn').addEventListener('change', readURL, true);
    }

    function readURL() {
        var file = document.getElementById("bg-btn").files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            document.getElementById('bg-img').style.backgroundImage = "url(" + reader.result + ")";
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {}
    }

    // edit text fields
    initFieldEdit();

    function initFieldEdit() {
        var $btn = $('.js-edit-btn');

        $btn.on('click', function(e) {
            e.preventDefault();
            var target = $(this).data('input-target');

            $('input').each(function() {
                if ($(this).data('input') === target) {
                    $(this).attr('readonly', false).focus().setCursorToTextEnd();
                    $(this).on('blur', function () {
                      $(this).prop('readonly', true);
                    });
                }
            });
        });
    }
    // set cursor to end of the text
    (function($) {
        $.fn.setCursorToTextEnd = function() {
            $initialVal = this.val();
            this.val($initialVal + ' ');
            this.val($initialVal);
        };
    })(jQuery);
    //delete row
    deleteRow();
    function deleteRow() {
    var $btn = $('.js-delete-btn');

      $btn.on('click', function () {
        $(this).parent().remove();
      });
    }
    //add row
    addRow();
    function addRow() {
      var $btn = $('.js-add-btn');
      $btn.on('click', function () {
        $(this).prev().clone().insertBefore($(this));
      });
    }

    //enable/disable field
    toggleField();
    function toggleField() {
      var $toggler = $('.js-toggler');
      var $input = $toggler.find('.toggler-input');

      $input.each(function () {
        if (!$(this).prop('checked')) {
          $(this).parent().nextAll('.form-field').find('input').prop('disabled', true);
        }
      });

      $input.on('change', function () {
        if ($(this).prop('checked')) {
          $(this).parent().nextAll('.form-field').find('input').prop('disabled', false);
        } else {
          $(this).parent().nextAll('.form-field').find('input').prop('disabled', true);
        }
      });
    }

    //input mask
    $('.has-mask').mask("+7999-999-99-99");
});
