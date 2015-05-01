from flask.ext.restless import APIManager
import modules


def create_api(app, db):
    api_manager = APIManager(app, flask_sqlalchemy_db=db)
    allowed_methods = ['GET', 'POST', 'PUT', 'DELETE']

    for module_name in modules.__all__:
        module = getattr(modules, module_name)

        # override existing the default allowed_methods if exists
        if hasattr(module, 'allowed_methods'):
            allowed_methods = getattr(modules, 'allowed_methods')

        api_manager.create_api(module, methods=allowed_methods)
