export const checkColor = props => {
  switch (true) {
    case props.danger:
      return props.theme.colors.danger;
    case props.success:
      return props.theme.colors.success;
    case props.default:
      return props.theme.colors.default;
    case props.primary:
      return props.theme.colors.primary;
    case props.warning:
      return props.theme.colors.warning;
    case props.info:
      return props.theme.colors.info;
    case props.light:
      return props.theme.colors.light;
    case props.dark:
      return props.theme.colors.dark;
    case props.lightish:
      return props.theme.colors.lightish;
    case props.darkish:
      return props.theme.colors.darkish;
    default:
      return 'initial';
  }
};

export const getButtonColors = props => {
  switch (true) {
    case props.danger:
      return props.theme.buttons.danger;
    case props.success:
      return props.theme.buttons.success;
    case props.default:
      return props.theme.buttons.default;
    case props.primary:
      return props.theme.buttons.primary;
    case props.warning:
      return props.theme.buttons.warning;
    case props.info:
      return props.theme.buttons.info;
    case props.lightish:
      return props.theme.buttons.lightish;
    default:
      return '';
  }
};
