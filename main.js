var formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "&#xf0e0;",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current website url",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobil Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
];

function createTextInput() {
  var form = document.querySelector("form");
  for (var i = 0; i < formData.length; i++) {
    if (
      formData[i].type === "text" ||
      formData[i].type === "tel" ||
      formData[i].type === "email"
    ) {
      var newInput = document.createElement("input");
      newInput.setAttribute("type", formData.type);
      newInput.setAttribute("placeholder", formData[i].label);

      form.appendChild(newInput);
    } else if (formData[i].type === "select") {
      var select = document.createElement("select");
      var defaultOption = document.createElement("option");
      //   defaultOption.value = formData[i].options[j].value;
      defaultOption.textContent = formData[i].label;
      defaultOption.default = true;
      select.appendChild(defaultOption);

      for (var j = 0; j < formData[i].options.length; j++) {
        var option = document.createElement("option");
        option.value = formData[i].options[j].value;
        option.textContent = formData[i].options[j].label;

        select.appendChild(option);
      }
      form.appendChild(select);
    } else if (formData[i].type === "textarea") {
      var textarea = document.createElement("textarea");
      textarea.setAttribute("placeholder", "Your Comment");
      textarea.setAttribute("id", "user-comment");
      form.appendChild(textarea);
    }
  }
}
createTextInput();
function addSubmit() {
  var form = document.querySelector("form");
  var submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit Form");
  submitButton.setAttribute("id", "submit");
  form.appendChild(submitButton);
}

addSubmit();
