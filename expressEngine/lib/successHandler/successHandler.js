import success from '../../cms/common/success';

export default (message = success.defaultSuccessMsg, data = null) => ({ data, message });
